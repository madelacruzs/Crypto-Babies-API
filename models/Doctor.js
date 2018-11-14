var mongoose = require('mongoose');  

var doctor = new mongoose.Schema({  
    _id: mongoose.Schema.Types.ObjectId,
    id_hospital: 
    {
        type: String,
        required: true
    },
    name: 
    {
        type: String,
        required: true
    },
    lastname: 
    {
        type: String,
        required: true
    },
    secondlastname: { type: String },
    profesionalid: { type: String },
    bcaddress: { type: String },
});

var Doctor = mongoose.model('Doctor', doctor );
module.exports = Doctor;