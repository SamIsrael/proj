const express = require('express');

const fs = require('fs');


const personalFile = "./data/personalDetails.json";

const addStudent = (req, res) => {
    try {
        fs.readFile(personalFile, "utf-8", (err, data) => {
            if (err) res.status(500).json({ "error": err.message });

            let existingStudent = JSON.parse(data);
            let newStudent = req.body;
            existingStudent.push(newStudent);
            console.log(existingStudent);

            fs.writeFile(personalFile, JSON.stringify(existingStudent), (err) => {
                if (err) console.log(err);
                res.status(200).json(existingStudent);
            });


        })
    } catch (err) {
        res.status(500).json({ "error": err.message });
    }
}

const deleteStudent = (req, res) => {
    res.send('deleteStudent');
}



const updateStudent = (req, res) => {
    res.send('updateStudent');
}


const getAllStudents = (req, res) => {
    try {
        fs.readFile(personalFile, "utf-8", (err, data) => {
            if (err) res.status(500).json({ "error": err.message });
            else console.log(data);


            let existingStudent = JSON.parse(data);

            if (existingStudent.length > 0) {
                res.status(200).json(existingStudent);
            } else {
                res.status(454).json({ "error": "No student found" })
            }
        })
    } catch (err) {
        res.status(500).json({ "error": err.message });
    }
}

const getSingleStudent = (req, res) => {
    try {
        fs.readFile(personalFile, "utf-8", (err, data) => {

            let existingStudent = JSON.parse(data);
            let studentid = req.params.id;

            let student = existingStudent.filter(v => v.id == studentid)

            if (student.length > 0) {
                res.status(200).json(student);
            } else {
                console.log("No student found;");
            }
            console.log("Get single detail");
        })
    }
    catch (err) {
        res.status(500).json({ "error": err.message });
    }
}

module.exports = {
    addStudent,
    deleteStudent,
    updateStudent,
    getAllStudents,
    getSingleStudent
}