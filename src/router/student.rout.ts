import express from "express";
import { addnewstdent,gelallstudent,getstudentbyid, getallclasses, addnewclass, getclassbyid,getallteachers,getteacrebyid,addnewteacher } from "../controller/student.controler";
import valdait from "../middleware/valdait";
import { classscama, classscamaId, studentscama, teacherscama } from "../scama/student.scama";


const router= express.Router()

router.get ("/student",gelallstudent)
router.get ("/classroom",getallclasses)
router.get ("/teacher",getallteachers)
router.post("/studentmanage",valdait(studentscama),addnewclass)
router.post("/studentmanage",valdait(classscama),addnewstdent)
router.post("/studentmanage",valdait(teacherscama),addnewteacher)
router.post("/studentmanage/:id",valdait(classscamaId),getclassbyid)
router.post("/studentmanage/:id",getstudentbyid)
router.post("/studentmanage/:id",getteacrebyid)


export default router
