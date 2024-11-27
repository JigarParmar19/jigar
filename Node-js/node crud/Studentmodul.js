const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema ({

    Name:String,
    Number:Number,
    course:String

})

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;