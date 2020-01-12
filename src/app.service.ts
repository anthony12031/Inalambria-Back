import { Injectable } from '@nestjs/common';
import { FunEvent } from './models/FunEvent.model';
import { User } from './models/User.model';
import { CreateEventDto } from './DTO/createEvent.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(FunEvent)
  private readonly funEventRepository: Repository<FunEvent>) {}

/**
 *
 * Retorna la lista de eventos registrados en base de datos
 * @returns {Promise<FunEvent[]>}
 * @memberof AppService
 */
async getEvents(): Promise<FunEvent[]> {
    return await this.funEventRepository.find();
  }

/**
 *
 * Retorna un evento espeifico
 * @returns {Promise<FunEvent[]>}
 * @memberof AppService
 */
async getEvent(eventId: number): Promise<FunEvent> {
  return await this.funEventRepository.findOne(eventId);
}

/**
 *
 * Registra un evento en base de datos
 * @param {CreateEventDto} createEventDto
 * @returns {Promise<boolean>} Retorna verdadero si el evento fue registrado de lo contrario falso
 * @memberof AppService
 */
async createEvent(createEventDto: CreateEventDto): Promise<boolean> {
     const funEvent = this.buildFunEvent(createEventDto);
     const user = new User();
     user.username = 'Anthony';
     funEvent.User = user;
     try {
    await this.funEventRepository.save(funEvent);
    return true;
    } catch (error) {
      return false;
    }
  }

/**
 *
 * Actualiza los campos de un evento ya registrado
 * @param {CreateEventDto} createEventDto
 * @param {number} eventId
 * @returns {Promise<boolean>}
 * @memberof AppService
 */
async updateEvent(createEventDto: CreateEventDto, eventId: number): Promise<boolean> {
    const funEvent = this.buildFunEvent(createEventDto);
    const user = new User();
    user.username = 'Anthony';
    funEvent.id = +eventId;
    funEvent.User = user;
    try {
    await this.funEventRepository.save(funEvent);
    return true;
    } catch (error) {
      return false;
    }
  }

/**
 *
 * Construye un objeto FunEvent a partir de un objeto createEventDto
 * @private
 * @param {CreateEventDto} createEventDto
 * @returns {FunEvent}
 * @memberof AppService
 */
private buildFunEvent(createEventDto: CreateEventDto): FunEvent {
    const funEvent = new FunEvent();
    funEvent.capacity = createEventDto.capacity;
    funEvent.name = createEventDto.name;
    funEvent.description = createEventDto.description;
    funEvent.date = createEventDto.date;
    return funEvent;
  }

}
