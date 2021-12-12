const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const router = express.Router();

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded( {extended: false}))
app.use(bodyParser.json())

app.use(express.static('original_project'));

app.use('/', express.static('original_project'));

router.post('/email', (req, resp) => {
    console.log(req.body);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER,
            pass: process.env.PASS                           // Change into an environment variable
        }
    });

    var mailOptions = {
        from: 'resumedistributor227@gmail.com',
        to: req.body.email,
        subject: 'Sending Email using Node.js',
        html: req.body.resume
    };

    //send the email, and send a response back based on whether 
    //it sent successfully.
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            resp.status(500).end(error.message)
        } else {
            resp.status(200).end('email sent')
        }
    });
});

app.use("/", router);

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
});