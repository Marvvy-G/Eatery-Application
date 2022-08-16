const mongoose = require("mongoose");

const restuarantSchema =  new mongoose.Schema({
    nameob : String,
    emailob: String,
    typeOfFood: String,
    logo: String,
    firstName: String,
    lastName: String,
    address: String,
    phoneNumber: String,
    password: String
})
module.exports = mongoose.model("restuarant", restuarantSchema); 