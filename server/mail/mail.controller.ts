import { Controller, Get, Post } from '@nestjs/common';

@Controller('mail')
export class MailController {
  //constructor(private readonly mailerService: MailerService) {}
  @Post()
  async sendMail() {
    return { status: false };
  }
}
