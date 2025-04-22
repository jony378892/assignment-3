import express from "express";
import { addSchool, listSchools } from "../controller/school.controller.js";

const router = express.Router();

router.get("/listSchools", listSchools);

router.post("/addSchool", addSchool);

export default router;
