import { Controller, Get, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { FunEvent } from './models/FunEvent.model';
import { CreateEventDto } from './DTO/createEvent.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/events')
  getEvents(): FunEvent[] {
    return this.appService.getEvents();
  }

  @Post('/events')
  createEvent(@Body() createEventDto: CreateEventDto): boolean {
    return this.appService.createEvent(createEventDto);
  }
}
