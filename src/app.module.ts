import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/User.model';
import { FunEvent } from './models/FunEvent.model';
import { Purchase } from './models/Purchase.model';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'juegosxbox',
      database: 'funEvents',
      entities: [User, FunEvent, Purchase],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Purchase, FunEvent, User]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
