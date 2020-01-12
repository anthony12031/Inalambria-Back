import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToOne, ManyToMany, JoinTable, OneToMany} from 'typeorm';
import { User } from './User.model';
import {ApiProperty} from '@nestjs/swagger';
import { Purchase } from './Purchase.model';

@Entity()
export class FunEvent {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    date: Date;

    @ManyToOne(type => User, user => user.publishEvents)
    User: User;

    @OneToMany(type => Purchase, purchase => purchase.funEvent)
    purchases !: Purchase[];

}
