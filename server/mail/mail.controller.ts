import { MailService } from './mail.service';
import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}
  @Post()
  async sendMail(@Req() req) {
    try {
      var res = await this.mailService.sendMail(req.body);
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error,
        },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
