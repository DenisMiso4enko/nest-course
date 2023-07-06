import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll(): string {
    return 'Return all movies';
  }

  @Get('/search')
  search(@Query('year') year: string) {
    return `Мы ищем фильм выпущенный в ${year} году`;
  }

  @Get('/:id')
  //@Param - нас интересует параметр из адресной строки, конкретно id, и сохраняем в переменную с типом....
  getOne(@Param('id') movieId: string): string {
    // если что-то нужно получить, нужно запросить
    return `Return One film by ${movieId}`;
  }

  @Post('/create')
  create(@Body() movieData): string {
    // Body для получение объектов в body
    console.log(movieData);
    return movieData;
  }

  @Delete('/delete/:id')
  remove(@Param('id') movieId: string): string {
    return `Revome film with id - ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() movieData) {
    return {
      updatedMovie: movieId,
      ...movieData,
    };
  }
}
