import { Module } from '@nestjs/common';
import { CreateBookService } from './services/createBook.service';
import { BookController } from './book.controller';
import { PrismaService } from 'src/database/PrismaService';
import { BookRepository } from './book.repository';

@Module({
  controllers: [BookController],
  providers: [CreateBookService, BookRepository, PrismaService],
})
export class BookModule {}
