import {   user } from "@prisma/client";
import { PrismaClientValidationError } from "@prisma/client/runtime";
import { Express } from "express";
import { Request,Response } from "express";
import { connectDB } from "../config/db";
import { prisma } from "../config/db";
import * as argon2 from "argon2";

export const loginhandler = async(req:Request,res:Response)=>{
 const {username,password} = req.body as user
const isuser= await prisma.user.findFirst({
where: {username,password},
})
if (!isuser){
return res.status(400).json({
message: "wrong username or passsword"
})

const ispassvalid = await argon2.verify(username,password);

if(!ispassvalid){
    return res.status(400).json({
        message: "wrong username or passsword"
    })
}

return res.status(200).json({
message: "welcome back again"


})
}

}

export const rigesterhandler = async(req:Request,res:Response)=>{
    try{
const newuser = req.body as user
const hash = await argon2.hash(newuser.password)
newuser.password=hash

await prisma.user.create({
data:newuser
})
return res.json({
Messag: "welcome to your website "



})  
} catch(error)
{
console.log(error)
const prismaerror = error as PrismaClientValidationError
return res.status(400).json({
message: prismaerror.message
})


}
}