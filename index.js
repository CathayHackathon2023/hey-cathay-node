import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import Users from "./models/user.js";


const app = express();

const CONNECTION_STRING = process.env.MONGO_URL;
mongoose.connect(CONNECTION_STRING);
const database = mongoose.connection;
database.on('error', (error)=>{
    console.log(error);
});
database.once('connected', ()=>{
    console.log("Database Connected");
});

app.use(express.json());

app.get("/users", async (req, res)=>{
    const users = await Users.find();
    res.status(200).json(users);
})
app.post("/users", async (req, res)=>{
    const user = await Users.create({
        name: "Lingo",
        age: 21
    });

    res.status(201).json(user);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server started at ${PORT}`);
})
