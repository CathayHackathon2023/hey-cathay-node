import express, { query } from "express";
import "dotenv/config";
import mongoose from "mongoose";
import Flights from "./models/flight.js";
import Bookings from "./models/booking.js";


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

app.get("/flights", async (req, res)=>{
    const filters = req.query;
    const flights = await Flights.find(filters);
    res.status(200).json(flights);
});

app.post("/flightS/bulk", async (req, res)=>{
    const data = req.body;
    const flights = await Flights.insertMany(data);
    res.status(201).json(flights);
});

app.post("/bookings/bulk", async(req, res)=>{
    const data = req.body;
    const bookings = await Bookings.insertMany(data);
    return res.status(201).json(bookings);
});

app.get("/bookings/:customerId/", async(req, res)=>{
    const customerId = req.params.customerId;
    const filters = req.query;
    const bookings = await bookings.find({customerId, ...filters})
    res.status(200).json(bookings);
});

app.get("/bookings/:customerId/upcoming", async(req, res)=>{
    const customerId = req.params.customerId;
    const bookings = await bookings.find({
        date:{$gte: Date.now()}
    })
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server started at ${PORT}`);
})
