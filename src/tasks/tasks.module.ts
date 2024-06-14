import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TasksController } from './task.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
    providers: [TaskService, PrismaService],
    controllers: [TasksController],
})
export class TasksModule { }
