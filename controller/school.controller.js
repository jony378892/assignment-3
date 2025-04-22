import pool from "../config/db.js";

const listSchools = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;

    console.log("Received query parameters:", { latitude, longitude });

    if (isNaN(latitude) || isNaN(longitude)) {
      return res.json({ error: "Invalid latitude or longitude" });
    }

    const userLat = parseFloat(latitude);
    const userLon = parseFloat(longitude);

    const [rows] = await pool.query("SELECT * FROM schools");

    if (rows.length === 0) {
      return res.json({ message: "No schools found in the database" });
    }

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
      const toRad = (value) => (value * Math.PI) / 180;
      const R = 6371; // Earth's radius in km
      const dLat = toRad(lat2 - lat1);
      const dLon = toRad(lon2 - lon1);
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      return R * c; // Distance in km
    };

    const sortedSchools = rows
      .map((school) => ({
        ...school,
        distance: calculateDistance(userLat, userLon, school.latitude, school.longitude),
      }))
      .sort((a, b) => a.distance - b.distance);

    res.json(sortedSchools);
  } catch (error) {
    console.error("Error in listSchools:", error);
    res.json({ success: false, message: error.message });
  }
};

const addSchool = async (req, res) => {
  try {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || isNaN(latitude) || isNaN(longitude)) {
      return res.json({ error: "Invalid input data" });
    }

    const [rows] = await pool.query("INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)", [name, address, latitude, longitude]);

    res.json(`${name} added successfully`);
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addSchool, listSchools };
