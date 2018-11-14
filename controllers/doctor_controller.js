var mongoose = require('mongoose');
var Doctor = require('../models/Doctor');

//ADD
exports.add_doctor = function(req, res) {
    var result = [];
    try
    {
        var newId = new mongoose.Types.ObjectId();
        var doctor = new Doctor ({
            _id: newId,
            id_hospital: req.body.id_hospital,
            name: req.body.name,
            lastname: req.body.lastname,
            secondlastname: req.body.secondlastname,
            profesionalid: req.body.profesionalid,
            bcaddress: req.body.bcaddress,
        });
        doctor.save(function(err) {
            if (err){
                res.status(200).send(err);
            }else{
                result.push({
                    result: "OK",
                    message: "doctor stored in database",
                    _id: newId,
                });
                res.status(200).send(result);
            }
        });
    }catch(err){
        res.status(200).send(err);
    }
};

//DELETE
exports.delete_doctor = function(req, res) {
    var result = [];
    const rid = req.params.id;
    try
    {
        Doctor.findById(rid)
        .exec()
        .then(docs => {
            docs.remove();
            result.push({
                result: "OK",
                message: "doctor deleted in database",
                _id: rid,
            });
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(200).send(err);
        });
    }catch(err){
        res.status(200).send(err);
    }
};

//LIST
exports.list_doctor = function(req, res) {
    var result = [];
    try
    {
        Doctor.find({})
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

//GET by ID
exports.getbyid_doctor = function(req, res) {
    var result = [];
    const rid = req.params.id;
    try
    {
        Doctor.findById(rid)
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