import {Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, ManyToOne, ManyToMany} from 'typeorm';
import {ApiProperty} from '@nestjs/swagger';

@Entity()
export class RegisterPurchaseDto {

    @ApiProperty({
        description: 'Número de entradas a comprar',
    })
    numEntrances: number;

}
