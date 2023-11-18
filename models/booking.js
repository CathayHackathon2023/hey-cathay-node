import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    destination: {
        required: true,
        type: String
    },
    origin: {
        required: true,
        type: String
    },
    passengerId:{
        required: true,
        type: mongoose.Schema.Types.ObjectId,
    },
    flightId:{
        required: true,
        type: mongoose.Schema.Types.ObjectId,
    },
    return:{
        type: Date,
    },
    class:{
        required: true,
        type: String
    },
    date:{
        required: true,
        type: Date
    },
    foodOffered: [{
        name: {type: String, required: true},
        image: {type: String, required: true},
        description: {type: String, required: true},

    }]
})
const Bookings = mongoose.model("bookings", bookingSchema)
export default Bookings;