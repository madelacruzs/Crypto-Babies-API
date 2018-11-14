var express = require('express');
var router = express.Router();

// Require controller modules.
var hospital_controller = require('../controllers/hospital_controller');
var doctor_controller = require('../controllers/doctor_controller');

router.get('/api/hospital', hospital_controller.list_hospital);
router.get('/api/hospital/:id', hospital_controller.getbyid_hospital);
router.post('/api/hospital', hospital_controller.add_hospital);
// router.put('/api/hospital/:id', hospitalController.update);
router.delete('/api/hospital/:id', hospital_controller.delete_hospital);

router.get('/api/doctor', doctor_controller.list_doctor);
router.get('/api/doctor/:id', doctor_controller.getbyid_doctor);
router.post('/api/doctor', doctor_controller.add_doctor);
// router.put('/api/hospital/:id', doctor_controller.update);
router.delete('/api/doctor/:id', doctor_controller.delete_doctor);


module.exports = router;