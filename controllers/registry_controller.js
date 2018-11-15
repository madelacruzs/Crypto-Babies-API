var mongoose = require('mongoose');
var Registry = require('../models/Registry');

//ADD
exports.add_registry = function(req, res) {
    var result = [];
    try
    {
        var newId = new mongoose.Types.ObjectId();
        var registry = new Registry ({
            _id: newId,
            idhospital: req.body.id_hospital,
            iddoctor: req.body.id_doctor,
            name: req.body.registeredName,
            hashfingerprint: req.body.babyHashFingerprint,
            birthday: req.body.birthDay,
            blockchain_hospital_address: req.body.hospitalAddress,
            genero: req.body.genero,
            country_code: req.body.countryCode,
            father_hashfingerprint: req.body.fatherHashFingerprint,
            mother_hashfingerprint: req.body.motherHashFingerprint,
            mother_name: req.body.motherName,
            father_name: req.body.fatherName,
            tx_hash_blockchain: req.body.tx_hash_blockchain
        });
        registry.save(function(err) {
            if (err){
                res.status(200).send(err);
            }else{
                result.push({
                    result: "OK",
                    message: "registry stored in database",
                    _id: newId,
                });
                res.status(200).send(result);
            }
        });
    }catch(err){
        res.status(200).send(err);
    }
};

//LIST
exports.list_registry = function(req, res) {
    try
    {
        Registry.find({}) 
        .exec()
        .then(docs => {
            res.status(200).json({
                docs
            });
        })
        .catch(err => {
            res.status(200).send(err);
        });
    }catch(err){
        res.status(200).send(err);
    }
};

//GET by NAME
exports.getbyname_registry = function(req, res) {
    const name = req.params.name;
    try
    {
        Registry.find({'name': {'$regex': name}}) 
        .exec()
        .then(docs => {
            res.status(200).json({
                docs
            });
        })
        .catch(err => {
            res.status(200).send(err);
        });
    }catch(err){
        res.status(200).send(err);
    }
};