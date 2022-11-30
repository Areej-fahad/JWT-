import express from "express";
import { loginhandler,rigesterhandler } from "../controller/user.contoler";

const router= express.Router();


router.post("/login",loginhandler);
router.post("/rigester",rigesterhandler);

export default router