
import nodemailer from "nodemailer";

// export const transporter = nodemailer.createTransport({
//     host: "mail.eternaltrading.org",
//     port: 465,
//     secure: false, // Replace with your SMTP service provider
//     auth: {
//         user: 'eternaltradingsupport@eternaltrading.org',
//         pass: 'EternalTrading031' // Replace with your email password (or use environment variables)
//     },
//     tls: {
//         rejectUnauthorized: true
//     }
// });


const html = `
    <h1>Hello World</h1>
    <p>Isn't Nodemailer useful</p>
`;

// async function main() {
const transporter = nodemailer.createTransport({
    host: 'smtp.eternaltrading.org',
    port: 587,
    secure: false,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "support@eternaltrading.org",
        pass: "EternalTrading031",
    },
});

const info = transporter.sendMail({
    from: 'EternalTrading <support@eternaltrading.org',
    to: 'ekezierichmond90@gmail.com',
    subject: 'Testing Testing',
    html: html,
})

// console.log("Message sent" + info.messageId);
// }


// verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

// main();
