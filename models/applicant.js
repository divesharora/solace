var mongoose = require("mongoose");
 
var applicantSchema = new mongoose.Schema({
    name: String,
    age: Number,
    city:String,
    skillset:String,
    contact:String
});
 
module.exports = mongoose.model("Applicant", applicantSchema);