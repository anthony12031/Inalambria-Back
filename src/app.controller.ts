import { Controller, Get, Body, Post, Put, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { FunEvent } from './models/FunEvent.model';
import { CreateEventDto } from './DTO/createEvent.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './models/User.model';
import { RegisterPurchaseDto } from './DTO/registerPurchase.dto';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectRepository(FunEvent)
    private readonly SystemUserRepository: Repository<User>,
    ) {}

  @Get('/events')
  async getEvents(): Promise<FunEvent[]> {
    return await this.appService.getEvents();
  }

  @Get('/events/:id')
  async getEvent(@Param() params): Promise<FunEvent> {
    return await this.appService.getEvent(params.id);
  }

  @Post('/purchase/:eventId')
  async attendEvent(@Body() registerPurchaseDto: RegisterPurchaseDto, @Param() params): Promise<boolean> {
    return await this.appService.registerPurchase(registerPurchaseDto, +params.eventId);
  }

  @Post('/events')
  async createEvent(@Body() createEventDto: CreateEventDto): Promise<boolean> {
    return await this.appService.createEvent(createEventDto);
  }

  @Put('/events/:id')
  async updateEvent(@Body() createEventDto: CreateEventDto, @Param() params): Promise<boolean> {
    return await this.appService.updateEvent(createEventDto, params.id);
  }
}
