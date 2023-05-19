
const Student = require('../models/student');

const student_login_get = (req, res) => {
       res.render("student/login");
    };

const student_login_post = async (req, res) => {

        const Sturoll = req.body.roll; 
        const Studob =req.body.dob  
        const individualStudent = await Student.findOne({roll : Sturoll,dob:Studob});    
        if(!individualStudent){
          res.render("student/login", {
            error : "Login with correct roll number"
          })
        }      
        res.render("student/view", { one : individualStudent});
    };


module.exports={
    student_login_get,
    student_login_post
}