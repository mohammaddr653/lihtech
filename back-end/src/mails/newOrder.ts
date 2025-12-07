//راه اندازی پکیج nodemailer
import { ENV } from '#src/config/env.js';
import { logger } from '#src/middlewares/logger.js';
import nodemailer from 'nodemailer';

const sendEmail = (subject: string, address: string, content: string) => {
  const transporter = nodemailer.createTransport({
    host: ENV.GMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: ENV.GMAIL_USER,
      pass: ENV.GMAIL_PASS,
    },
  });
  const mailOptions = {
    from: ENV.GMAIL_USER,
    to: address,
    subject: subject,
    html: content,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      logger.error(error);
    } else {
      logger.info(info.response);
    }
  });
};

export default sendEmail;
