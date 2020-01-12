import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToOne, ManyToMany} from 'typeorm';
import {ApiProperty} from '@nestjs/swagger';

@Entity()
export class CreateEventDto {

    @ApiProperty({
        description: 'Capacidad maxima de participantes en el evento',
    })
    capacity: number;

    @ApiProperty({
        description: 'Nombre del evento',
    })
    name: string;

    @ApiProperty({
        description: 'Descripción del evento',
    })
    description: string;

    @ApiProperty({
        description: 'Fecha en la que se realizara el evento',
    })
    date: Date;

}
