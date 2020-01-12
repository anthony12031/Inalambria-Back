import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, OneToMany, JoinTable, ManyToMany} from 'typeorm';
import { FunEvent } from './FunEvent.model';

@Entity()
export class User {

    @PrimaryColumn()
    username: string;

    @Column()
    password: string;

    @OneToMany(Type => FunEvent, funEvent => funEvent.User)
    publishEvents: FunEvent[];

    // @ManyToMany(type => FunEvent, funEvent => funEvent.attendees)
    // @JoinTable()
    // attendingEvents: FunEvent[];

}
