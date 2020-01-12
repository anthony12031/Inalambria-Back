import { Injectable } from '@nestjs/common';
import { FunEvent } from './models/FunEvent.model';
import { User } from './models/User.model';
import { CreateEventDto } from './DTO/createEvent.dto';

@Injectable()
export class AppService {
  getEvents(): FunEvent[] {
    const funEvent = new FunEvent();
    const user = new User();
    user.username = 'yo';
    funEvent.id = 1;
    funEvent.name = 'evento';
    funEvent.user = user;
    return [funEvent];
  }

  createEvent(createEventDto: CreateEventDto): boolean {
    return false;
  }
}
