import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, OneToMany, JoinTable, ManyToMany} from 'typeorm';
import { FunEvent } from './FunEvent.model';

@Entity()
export class User {

    @PrimaryColumn()
    username: string;

    @Column()
    password: string;

    @OneToMany(type => FunEvent, funEvent => funEvent.user)
    publishEvents: FunEvent[];

    @ManyToMany(type => FunEvent, funEvent => funEvent.attendees)
    @JoinTable()
    attendingEvents: FunEvent[];

}
