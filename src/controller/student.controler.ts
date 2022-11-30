import {   classroom,teacher,student } from "@prisma/client";
import { PrismaClientValidationError } from "@prisma/client/runtime";
import { Express } from "express";
import { Request,Response } from "express";
import { connectDB } from "../config/db";
import { prisma } from "../config/db";

export const  gelallstudent = async(req:Request,res:Response)=>
    {
    const getsudent =await prisma.student.findMany()
    return res.status(200).json(getsudent)
}


 export const addnewstdent = async(req:Request,res:Request)=>{
    let newbook= req.body as student
    
    await prisma.student.create({
    data : newbook
    
    })
    
    }

   export const getstudentbyid = async(req:Request,res:Request)=>{
        let {id}= req.body as student
        
        await prisma.student.findUnique({
        where : {id}
        
        })
        
        }

        export const  getallclasses = async(req:Request,res:Response)=>
    {
    const getclass =prisma.classroom.findMany()
    return res.json(getclass)
}
 export const addnewclass = async(req:Request,res:Request)=>{
    let newclass= req.body as classroom
    
    await prisma.classroom.create({
    data : newclass
    
    })
    
    }

    export const getclassbyid= async(req:Request,res:Request)=>{
        let {id}= req.body as classroom
        
        await prisma.classroom.findUnique({
        where : {id}
        
        })
        
        }

        export const  getallteachers= async(req:Request,res:Response)=>
    {
    const getteacher =prisma.teacher.findMany()
    return res.json(getteacher)
}
 export const addnewteacher = async(req:Request,res:Request)=>{
    let newteacher= req.body as teacher
    
    await prisma.teacher.create({
    data : newteacher
    
    })
    
    }

    export const getteacrebyid= async(req:Request,res:Request)=>{
        let {id}= req.body as classroom
        
        await prisma.teacher.findUnique({
        where : {id}
        
        })
        
        }

        



        