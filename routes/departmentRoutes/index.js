import express from "express";
import Department from "../../db/models/deparmentSchema.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const body = { ...req.body };
  await Department.create(body);
  res.status(201).json({ message: "Department created successfully" });
});

router.get("/", async (req, res) => {
  const departments = await Department.find();
  res.status(200).json(departments);
});

export default router;
