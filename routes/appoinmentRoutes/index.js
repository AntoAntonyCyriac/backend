import express from "express";
import Appoinment from "../../db/models/appoinmentSchema";

const router = express.Router();

// list appoinments by doc id
router.get("/doctor/:id", (req, res) => {
  const { id } = req.params;

  const appoinments = Appoinment.find({ doctor: id });
  res.status(200).json(appoinments);
});

// list appoinments by user id
router.get("/user/:id", (req, res) => {
  const { id } = req.params;

  const appoinments = Appoinment.find({ user: id });
  res.status(200).json(appoinments);
});

export default router;
