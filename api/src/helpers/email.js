import nodemailer from 'nodemailer';
import config from '../config/email.json';

const sendEmail = async ({ to, subject, html, from = config.emailFrom }) => {
  const transporter = nodemailer.createTransport(config.smtpOptions);
  await transporter.sendMail({ from, to, subject, html });
};

export default sendEmail;
