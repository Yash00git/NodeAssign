//importing mongoose
const mongoose = require("mongoose")
var DateOnly = require('mongoose-dateonly')(mongoose);
// schema represents the structure of a particular document
// Each schema maps to a MongoDB collection
const { Schema } = mongoose;

//Student schema
const studentSchema = new Schema({
  roll: {
    type : Number,
    unique : true
  } ,
  name: String,     
  dob:{
    type:DateOnly
  } ,
  score:Number 
});

//exporting the model
// A model defines a programming interface for interacting with the database (read, insert, update, etc).
module.exports = mongoose.model("Student", studentSchema,'StudentDetails')