import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
@Injectable()
export class MailService {
  sendMail(body): Promise<any> {
    return new Promise((resolve, reject) => {
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'ericmailbot@gmail.com',
          pass: 'botmaileric',
        },
      });
      var mailOptions = {
        from: `Portfolio Contact <${body.name}>`,
        to: 'royprateek96@gmail.com',
        subject: body.subject,
        text: body.message,
      };
      let resp = false;

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log('error is ' + error);
          reject(error); // or use rejcet(false) but then you will have to handle errors
        } else {
          console.log('Email sent: ' + info.response);
          resolve(info);
        }
      });
    });
  }
}
