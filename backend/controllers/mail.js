import asyncHandler from "express-async-handler";
import nodemailer from "nodemailer";

export const sendMail = asyncHandler(async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  if (!name || !email || !message) {
    res.status(400);
    throw new Error("All fields must be filled");
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: `${email}`,
    to: process.env.TO_EMAIL,
    html: `
    
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
        }
    
        table {
          border-collapse: collapse;
          margin-bottom: 16px;
          width: 100%;
        }
    
        th,
        td {
          padding: 8px;
          text-align: left;
          vertical-align: top;
          border: 1px solid #000000;
        }
    
        th {
          background-color: black;
          color: white;
        }
    
        td {
          background-color: #ffffff;
          color: #000000;
        }
    
        .message-cell {
          word-break: break-word;
        }
      </style>
    </head>
    <body>
      <table>
        <tr>
          <th colspan="2">KONTAKT</th>
        </tr>
        <tr>
          <td><strong>Name:</strong></td>
          <td>${name}</td>
        </tr>
        <tr>
          <td><strong>Email:</strong></td>
          <td>${email}</td>
        </tr>
       
        
        <tr>
          <td><strong>Message:</strong></td>
          <td class="message-cell">${message}</td>
        </tr>
      </table>
    </body>
    </html>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json("An error occurred while sending the email.");
    } else {
      console.log("Email sent:", info.response);
      res
        .status(200)
        .json("Thank you for your message! We will get back to you soon.");
    }
  });
});
