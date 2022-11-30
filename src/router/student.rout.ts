import express from "express";
import { addnewstdent,gelallstudent,getstudentbyid, getallclasses, addnewclass, getclassbyid,getallteachers,getteacrebyid,addnewteacher } from "../controller/student.controler";
import router from "./userrout";

const app= express.Router()

router.get ("/studentmanage",gelallstudent)
router.get ("/studentmanage",getallclasses)
router.get ("/studentmanage",gelallstudent)
router.post("/studentmanage",addnewclass)
router.post("/studentmanage",addnewstdent)
router.post("/studentmanage",addnewteacher)
router.post("/studentmanage/:id",getclassbyid)
router.post("/studentmanage/:id",getstudentbyid)
router.post("/studentmanage/:id",getteacrebyid)


export default router
