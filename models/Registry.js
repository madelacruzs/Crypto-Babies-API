var mongoose = require('mongoose');  

var registry = new mongoose.Schema({  
    _id: mongoose.Schema.Types.ObjectId,
    idhospital: { type: String }, 
    iddoctor: { type: String },
    name: { type: String },
    hashfingerprint: { type: String },
    birthday: { type: Date },
    blockchain_hospital_address: { type: String },
    genero: { type: String },
    // address: { type: String },
    country_code: { type: String },
    father_hashfingerprint: { type: String },
    mother_hashfingerprint: { type: String },
    mother_name: { type: String },
    father_name: { type: String },
    tx_hash_blockchain: { type: String },

});

var Registry = mongoose.model('Registry', registry );
module.exports = Registry;