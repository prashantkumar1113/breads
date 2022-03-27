// dependencies
const mongoose = require("mongoose");
const {Schema} = mongoose;

// schema
const bakerSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ["Rachel", "Monica", "Joey", "Chandler", "Ross", "Phoebe"],
    },
    startDate: {type: Date, required: true},
    bio: String,
});

// model
const Baker = mongoose.model("Baker", bakerSchema);

// baker
module.exports = Baker;
