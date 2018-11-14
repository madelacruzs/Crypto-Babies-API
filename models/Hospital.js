var mongoose = require('mongoose');  

var hospital = new mongoose.Schema({  
    _id: mongoose.Schema.Types.ObjectId,
    name: 
    {
        type: String,
        index: { 
            unique: true 
        },
        required: true
    },
    rfc: 
    {
        type: String,
        required: true
    },
    registrynumber: 
    {
        type: String,
        required: true
    },
    address: { type: String },
    bcaddress: { type: String },
    phone: { type: String },
});

var Hospital = mongoose.model('Hospital', hospital );
module.exports = Hospital;