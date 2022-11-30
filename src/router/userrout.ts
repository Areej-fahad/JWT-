import express from "express";
import { loginhandler,rigesterhandler,getAllUsersHandler, adminHandler } from "../controller/user.contoler";
import validate from "../middleware/valdait";

const router= express.Router();


router.post("/login");
router.get ("/admin",adminHandler)
router.get ("/user",getAllUsersHandler)

router.post("/rigester",rigesterhandler);
export default router