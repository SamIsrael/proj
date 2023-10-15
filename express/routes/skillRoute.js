const express = require('express');
const { addQuestion, deleteQuestion, updateQuestion, getAllQuestions, getSingleQuestion } = require('../contollers/skillContoller');
const router = express.Router();

router.post('/addQuestion', addQuestion);
router.delete('/deleteQuestion',deleteQuestion);
router.put('/updateQuestion', updateQuestion);
router.get('/getAllQuestions', getAllQuestions);
router.get('/getSingleQuestion/:id', getSingleQuestion);


module.exports = router;