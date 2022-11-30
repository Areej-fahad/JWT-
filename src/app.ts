import { z } from "zod";
import  express  from "express";
import { connectDB } from "./config/db";
import userrout from "./router/userrout"
import studentRout from "./router/student.rout"
const app= express();

connectDB();
app.use (express.json())
const port= 3360

app.use("/auth",userrout)
app.use("/studentmanage",studentRout)


app.listen(port, () => {

    console.log(`Server is running in ${port}`);
});

