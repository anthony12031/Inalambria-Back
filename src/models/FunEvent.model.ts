import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToOne, ManyToMany, JoinTable} from 'typeorm';
import { User } from './User.model';
import {ApiProperty} from '@nestjs/swagger';

@Entity()
export class FunEvent {

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
    User: User;

    // attendees: User[];

}
