
const express = require('express');
const { addStudent, deleteStudent, updateStudent, getAllStudents, getSingleStudent } = require('../contollers/personalController');
const router = express.Router();



router.get("/addStudent", addStudent);
router.get("/deleteStudent", deleteStudent);
router.get("/updateStudent", updateStudent);
router.get("/getAllStudents", getAllStudents);
router.get("/getSingleStudent/:id", getSingleStudent);


module.exports = router;