var express = require('express');
var router = express.Router();

// Require controller modules.
var hospital_controller = require('../controllers/hospital_controller');
var doctor_controller = require('../controllers/doctor_controller');
var registry_controller = require('../controllers/registry_controller');

router.get('/api/hospital', hospital_controller.list_hospital);
router.get('/api/hospital/:id', hospital_controller.getbyid_hospital);
router.post('/api/hospital', hospital_controller.add_hospital);
router.put('/api/hospital/:id', hospital_controller.update_hospital);
router.delete('/api/hospital/:id', hospital_controller.delete_hospital);

router.get('/api/doctor', doctor_controller.list_doctor);
router.get('/api/doctor/:id', doctor_controller.getbyid_doctor);
router.post('/api/doctor', doctor_controller.add_doctor);
router.put('/api/doctor/:id', doctor_controller.update_doctor);
router.delete('/api/doctor/:id', doctor_controller.delete_doctor);

router.get('/api/registry', registry_controller.list_registry);
router.get('/api/registry/:name', registry_controller.getbyname_registry);
router.post('/api/registry', registry_controller.add_registry);

module.exports = router;