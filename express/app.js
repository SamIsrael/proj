const express = require('express');
const app = express();

const PORT = 4578;
const cors = require('cors');


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4578'
}));

const personalDetails = require('./routes/personalRoute');
const auth = require('./middleware/auth')
app.use("/api/details", auth, personalDetails);

const personalityAssessment = require('./routes/personalityRoute');
app.use("/api/PA", personalityAssessment);

const skillAssessment = require('./routes/skillRoute');
app.use("/api/SA", skillAssessment);

const interestAssessment = require('./routes/interestRoute');
app.use("/api/IA", interestAssessment);


app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})