import { PrismaService } from 'src/database/PrismaService';
import { BookDto } from './book.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: BookDto) {
    try {
      return await this.prisma.book.create({
        data,
      });
    } catch (error) {
      throw new Error('Erro ao criar livro');
    }
  }

  async findOne(barcode: string) {
    try {
      return await this.prisma.book.findUnique({
        where: {
          barcode,
        },
      });
    } catch (error) {
      throw new Error('Erro ao buscar livro');
    }
  }
}