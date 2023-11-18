import mongoose from "mongoose";

const flightSchema = new mongoose.Schema({
    destination: {
        required: true,
        type: String
    },
    origin: {
        required: true,
        type: String
    },
    date:{
        required: true,
        type: Date
    },
    return:{
        type: Date,
    },
})
const Flights = mongoose.model("Flights", flightSchema)
export default Flights;