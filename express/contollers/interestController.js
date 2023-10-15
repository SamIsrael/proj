const fs = require('fs');

const interestFile = "./data/interestAssessment.json";

const addQuestion = (req, res) => {
    try {
        fs.readFile(interestFile, "utf-8", (err, data) => {
            if (err) res.status(500).json({ "error": err.message });

            let existingQuestion = JSON.parse(data);
            let newQuestion = req.body;
            existingQuestion.push(newQuestion);
            console.log("existingQuestion");

            fs.writeFile(interestFile, JSON.stringify(existingQuestion), (err) => {
                if (err) console.log(err);
                res.status(200).json(existingQuestion);
            });


        })
    } catch (err) {
        res.status(500).json({ "error": err.message });
    }
}

const deleteQuestion = (req, res) => {
    try{
        res.status(200).json({ "message": `Question has been deleted` });
    } catch{
        res.status(500).json({ "error": err.message });
    }
}

const updateQuestion = (req, res) => {
    try{
        res.status(200).json({ "message": `Question has been updated` });
    } catch{
        res.status(500).json({ "error": err.message });
    }
}

const getAllQuestions = (req, res) => {
    try {
        fs.readFile(interestFile, "utf-8", (err, data) => {
            if (err) res.status(500).json({ "error": err.message });

            let existingQuestion = JSON.parse(data);
            res.status(200).json(existingQuestion);
        })
    } catch (err) {
        res.status(500).json({ "error": err.message });
    }
}

const getSingleQuestion = (req, res) => {
    try {
        fs.readFile(interestFile, "utf-8", (err, data) => {

            let existingQuestion = JSON.parse(data);
            let questionid = req.params.id;

            let question = existingQuestion.filter(v => v.id == questionid)

            if (question.length > 0) {
                res.status(200).json(question);
            } else {
                console.log("No question found;");
            }
            console.log("Get single question");
        })
    }
    catch (err) {
        res.status(500).json({ "error": err.message });
    }
}

module.exports = {
    addQuestion,
    deleteQuestion,
    updateQuestion,
    getAllQuestions,
    getSingleQuestion
}