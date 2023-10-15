
const express = require('express');
const { addStudent, deleteStudent, updateStudent, getAllStudents, getSingleStudent } = require('../contollers/personalController');
const router = express.Router();



router.post("/addStudent", addStudent);
router.delete("/deleteStudent", deleteStudent);
router.put("/updateStudent", updateStudent);
router.get("/getAllStudents", getAllStudents);
router.get("/getSingleStudent/:id", getSingleStudent);


module.exports = router;