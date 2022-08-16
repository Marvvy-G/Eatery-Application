const mongoose = require("mongoose");

const customerSchema =  new mongoose.Schema({
    name : String,
    image: String,
    phoneNumber: String,
    address: String,
    allergies: String,
    email: String,
    password: String,
    type: String
});

module.exports = mongoose.model("customer", customerSchema); 