import { z } from "zod";
import  Express  from "express";
import { connectDB } from "./config/db";
import validate from "./middleware/valdait";
const app= Express();

connectDB();
const port= 3360

app.use("/auth")
app.use("studentmanage")

app.use (Express.json())

app.listen(port, () => {

    console.log(`Server is running in ${port}`);
});

