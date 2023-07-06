import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

// Декораторы, позволяют добавить какой-то функционал в наш класс
@Module({
  imports: [],
  controllers: [AppController, MoviesController], // берет определенный url и вызывает определенную функцию // routing в Express
  providers: [AppService, MoviesService],
})
export class AppModule {}

// Module - блок кода,который выполняет одну определенную задачу
