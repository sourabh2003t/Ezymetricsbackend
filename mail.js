const nodemailer = require('nodemailer');

async function sendEmailAlert() {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password',
        },
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'recipient@example.com',
        subject: 'Alert: Condition Met',
        text: 'An alert condition has been triggered.',
    };

    await transporter.sendMail(mailOptions);
}

