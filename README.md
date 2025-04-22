# School Management API

This project is a Node.js-based RESTful API for managing schools. It allows users to add schools to a database and fetch a list of schools sorted by proximity to a given location.

## Features

- **Add School**: Add a new school with details such as name, address, latitude, and longitude.
- **List Schools**: Fetch all schools from the database and sort them by proximity to a user's location using latitude and longitude.

## Technologies Used

- **Node.js**: Backend runtime.
- **Express.js**: Web framework for building APIs.
- **MySQL**: Relational database for storing school data.

## Prerequisites

- Node.js (v18 or higher)
- MySQL server
- npm or pnpm package manager

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd assignment-3
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the database:

   - Import the `init.sql` file into your MySQL server to create the required database and table.
   - Update the `.env` file with your database credentials.

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### 1. Add School

- **Endpoint**: `/api/v1/addSchool`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "name": "School Name",
    "address": "School Address",
    "latitude": 12.9716,
    "longitude": 77.5946
  }
  ```
- **Response**:
  ```json
  "School Name added successfully"
  ```

### 2. List Schools

- **Endpoint**: `/api/v1/listSchools`
- **Method**: `GET`
- **Query Parameters**:
  - `latitude`: User's latitude
  - `longitude`: User's longitude
- **Example**:
  ```
  GET /api/v1/listSchools?latitude=12.9716&longitude=77.5946
  ```
- **Response**:
  ```json
  [
    {
      "id": 1,
      "name": "School A",
      "address": "Address A",
      "latitude": 12.9718,
      "longitude": 77.5947
    },
    {
      "id": 2,
      "name": "School B",
      "address": "Address B",
      "latitude": 12.972,
      "longitude": 77.595
    }
  ]
  ```

## Project Structure

```
assignment-3/
├── app.js                 # Main application file
├── config/
│   └── db.js              # Database connection configuration
├── controller/
│   └── school.controller.js # Controller for school-related logic
├── routes/
│   └── school.route.js    # Routes for school-related endpoints
├── init.sql               # SQL script to initialize the database
├── .env                   # Environment variables
├── .gitignore             # Files to ignore in Git
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=mydb
```

## Running in Development Mode

Use the following command to run the server in development mode with file watching:

```bash
npm run dev
```

## License

This project is licensed under the ISC License.
