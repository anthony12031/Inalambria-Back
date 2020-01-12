import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, OneToMany, JoinTable, ManyToMany} from 'typeorm';
import { FunEvent } from './FunEvent.model';
import { Purchase } from './Purchase.model';

@Entity()
export class User {

    @PrimaryColumn()
    username: string;

    @Column()
    password: string;

    @OneToMany(type => FunEvent, funEvent => funEvent.User)
    publishEvents: FunEvent[];

    @OneToMany(type => Purchase, purchase => purchase.user)
    purchases !: Purchase[];

}
