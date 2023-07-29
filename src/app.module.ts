import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  // decorator = decorando, acoplando um funcionamento dentro de uma outra função, variável, classe, etc.
  imports: [],
  controllers: [AppController], // Os arquivos que são pontas sde entrada na aplicação. Por exemplo, uma chamada http.
  providers: [PrismaService],
})
export class AppModule {}
