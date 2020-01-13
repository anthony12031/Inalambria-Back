import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToOne, ManyToMany} from 'typeorm';
import {ApiProperty} from '@nestjs/swagger';
import {Length} from 'class-validator';

@Entity()
export class CreateEventDto {

    @ApiProperty({
        description: 'Capacidad maxima de participantes en el evento',
    })
    capacity: number;

    @ApiProperty({
        description: 'Nombre del evento',
    })
    @Length(1, 100)
    name: string;

    @ApiProperty({
        description: 'Descripción del evento',
    })
    @Length(1, 100)
    description: string;

    @ApiProperty({
        description: 'Fecha en la que se realizara el evento',
    })
    date: Date;

}
