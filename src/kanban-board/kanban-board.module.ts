import { Module } from '@nestjs/common';
import { KanbanBoardService } from './kanban-Board.service';
import { KanbanBoardController } from './kanban-board.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
    providers: [KanbanBoardService, PrismaService],
    controllers: [KanbanBoardController],
})
export class KanbanBoardModule {}
