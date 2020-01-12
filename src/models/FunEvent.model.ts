import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToOne, ManyToMany} from 'typeorm';
import { User } from './User.model';
import {ApiProperty} from '@nestjs/swagger';

@Entity()
export class FunEvent {

    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    capacity: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    date: Date;

    @ManyToOne(Type => User, user => user.publishEvents)
    user: User;

    @ManyToMany(type => User, user => user.attendingEvents)
    attendees: User[];

}
