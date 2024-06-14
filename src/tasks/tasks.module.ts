import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TasksController } from './task.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LogsService } from 'src/logs/logs.service';
import { Log, LogSchema } from "../logs/schemas/log.schema";
import { LogsModule } from 'src/logs/logs.module';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Log.name, schema: LogSchema }]),
        LogsModule, 
      ],
    providers: [TaskService, PrismaService],
    controllers: [TasksController],
})
export class TasksModule { }
