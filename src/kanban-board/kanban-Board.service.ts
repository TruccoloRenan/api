import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Prisma, KanbanBoard } from '@prisma/client'

@Injectable()
export class KanbanBoardService {
    constructor(private prisma: PrismaService) {}

    async createKanbanBoard(data: Prisma.KanbanBoardCreateInput): Promise<KanbanBoard> {
        return this.prisma.kanbanBoard.create({ data });
    }

    async findAll(): Promise<KanbanBoard[]>{
        return this.prisma.kanbanBoard.findMany()
    }

    async findFirst(userId: number): Promise<KanbanBoard>{
        return this.prisma.kanbanBoard.findFirst({ where: { userId }, include: { tasks: true}})
    }
    
    async findOne(id: number): Promise<KanbanBoard>{
        return this.prisma.kanbanBoard.findUnique({ where: { id }});
    }

    async updateKanbanBoard(id: number, data: Prisma.KanbanBoardUpdateInput): Promise<KanbanBoard>{
        return this.prisma.kanbanBoard.update({
            where: { id },
            data,
        });
    }

    async deleteKanbanBoard(id: number): Promise<KanbanBoard>{
        return this.prisma.kanbanBoard.delete({
            where: { id }
        })
    }
}