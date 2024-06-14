import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth-guard';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LogsModule } from './logs/logs.module';
import { TasksModule } from './tasks/tasks.module';
import { KanbanBoardModule } from './kanban-board/kanban-board.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'),
    PrismaModule, UserModule, AuthModule, LogsModule, TasksModule, KanbanBoardModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ],
})
export class AppModule {}
