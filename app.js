import express, { urlencoded } from "express";
import cors from "cors";
import schoolRouter from "./routes/school.route.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/api/v1", schoolRouter);

app.listen(port, () => {
  console.log("Server is running on port: ", port);
});
