import { Module } from '@nestjs/common';
import { BookModule } from './modules/book/book.module';
import { BrennoModule } from './modules/brenno/brenno.module';

@Module({
  imports: [BookModule, BrennoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
