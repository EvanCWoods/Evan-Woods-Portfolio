const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.static("Develop"));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./Develop/public/index.html"))
})

app.post("/", (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.email,
            pass: process.env.password + "#"
    }
    })
    const mailOptions = {
        from: req.body.email,
        to: "evan.woods.dev@gmail.com",
        subject: `Enquiry from ${req.body.fName} ${req.body.lName}`,
        text: req.body.explaination
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            throw err;
            res.send(err);
        } else {
            console.log(`Email sent! ${info.response}`);
            res.send("Success");
        }
    })
});


app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
});