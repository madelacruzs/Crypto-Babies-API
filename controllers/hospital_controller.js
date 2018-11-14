var mongoose = require('mongoose');
var Hospital = require('../models/Hospital');

//ADD
exports.add_hospital = function(req, res) {
    var result = [];
    var newId = new mongoose.Types.ObjectId();
    var hospital = new Hospital ({
        _id: newId,
        name: req.body.name,
        rfc: req.body.rfc,
        registrynumber: req.body.registrynumber,
        address: req.body.address,
        bcaddress: req.body.bcaddress,
        phone: req.body.phone,
    });

    hospital.save(function(err) {
        if (err){
            res.status(200).send(err);

        }else{
            result.push({
                result: "OK",
                message: "hospital stored in database",
                _id: newId,
            });
            res.status(200).send(result);
        }
    });
};

//DELETE
exports.delete_hospital = function(req, res) {
    var result = [];
    const rid = req.params.id;

    Hospital.findById(rid)
    .exec()
    .then(docs => {
        docs.remove();
        result.push({
            result: "OK",
            message: "hospital deleted in database",
            _id: rid,
        });
        res.status(200).send(result);
    })
    .catch(err => {
        res.status(200).send(err);
    });
};

//LIST
exports.list_hospital = function(req, res) {
    var result = [];
    Hospital.find({})
    .exec()
    .then(docs => {
        res.status(200).json({
            docs
        });
    })
    .catch(err => {
        res.status(200).send(err);
    });
};

//GET by ID
exports.getbyid_hospital = function(req, res) {
    var result = [];
    const rid = req.params.id;
    try
    {
        Hospital.findById(rid)
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




