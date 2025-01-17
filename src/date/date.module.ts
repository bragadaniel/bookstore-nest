import { Module } from '@nestjs/common';
import { DateController } from './date.controller';
import { DateService } from './date.service';

@Module({
  controllers: [DateController],
  providers: [DateService]
})
export class DateModule { }
