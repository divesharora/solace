var mongoose = require("mongoose");
const Applicant = require("./applicant");
 
var jobSchema = new mongoose.Schema({
   jname: String,
   company: String,
   salary:String,
   location:String,
   applicants: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Applicant"
      }
   ]
});
 
module.exports = mongoose.model("Job", jobSchema);