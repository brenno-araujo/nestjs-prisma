import { Controller, Post, Body } from '@nestjs/common';
import { BookDto } from './book.dto';
import { CreateBookService } from './services/createBook.service';

@Controller('book')
export class BookController {
  constructor(private readonly createBookService: CreateBookService) {}

  @Post()
  async create(@Body() data: BookDto) {
    try {
      return await this.createBookService.execute(data);
    } catch (error) {
      return { message: error.message };
    }
  }
}
