import nodemailer from 'nodemailer';
import config from '../config/email.json';

export default sendEmail = async ({
  to,
  subject,
  html,
  from = config.emailFrom,
}) => {
  const transporter = nodemailer.createTransport(config.smtpOptions);
  await transporter.sendMail({ from, to, subject, html });
};
