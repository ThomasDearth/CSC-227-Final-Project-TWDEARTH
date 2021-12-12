// TODO: Remove from final project
var nodemailer = require('nodemailer');             //Note: not installed by default. install using 'npm install nodemailer
var emailSubject = 'twdearth@gmail.com';

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'resumedistributor227@gmail.com',     // Change into an environment variable
        pass: 'demop@s5'                            // Change into an environment variable
    }
});

var mailOptions = {
    from: 'resumedistributor227@gmail.com',
    to: emailSubject,
    subject: 'Sending Email using Node.js',
    html: '<p>Source: https://www.w3schools.com/nodejs/nodejs_email.asp</p>'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});