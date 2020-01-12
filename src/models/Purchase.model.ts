import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToOne, ManyToMany, JoinTable} from 'typeorm';
import { User } from './User.model';
import { FunEvent } from './FunEvent.model';

@Entity()
export class Purchase {

    @PrimaryGeneratedColumn()
    idCompra!: number;

    @Column()
    numEntrances!: number;

    @ManyToOne(type => FunEvent, event => event.purchases)
    funEvent!: FunEvent;

    @ManyToOne(type => User, user => user.purchases)
    user!: User;
}
