import express from "express";
import doctorRoutes from "./doctorRoutes/index.js";
import userRoutes from "./userRoutes/index.js";
import departmentRoutes from "./departmentRoutes/index.js";
import imageRoute from "./imageRoute/index.js";

const router = express.Router();

router.use("/doctor", doctorRoutes);
router.use("/department", departmentRoutes);
router.use("user", userRoutes);
router.use("/upload", imageRoute);

export default router;
