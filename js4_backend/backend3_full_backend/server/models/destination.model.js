const mongoose = require("mongoose")

const DestinationSchema = new mongoose.Schema({
    location: {
        type: String,
        required: [true, "Location is required"],
        minlength: [2, "Location must be at least 2 characters"]
    },
    rating: {
        type: Number,
        required : [true, "Rating is required"],
        min: [1, "Rating must be between 1 and 10. "],
        max: [10, "Rating must be between 1 and 10. "],
    },
    imageUrl :{
        type: String,
        required: [true, "Image url is required"],
    },
    season :{
        type: String,
        required: [true, "Season is required"],
    }
}, {timestamps: true})

const Destination = mongoose.model('Destination', DestinationSchema)
module.exports = Destination