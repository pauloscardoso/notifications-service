import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateNotificationBody } from 'src/create-notification-body';
import { PrismaService } from 'src/prisma.service';

@Controller('notifications') // decorator / primeiro parâmetro pode ser o endereço da rota
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get() // primeiro parâmetro pode ser o endereço da rota
  list() {
    return this.prisma.notification.findMany();
  }

  @Post() // primeiro parâmetro pode ser o endereço da rota
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
