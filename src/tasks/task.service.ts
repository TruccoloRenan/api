import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Prisma, Task } from "@prisma/client";

@Injectable()
export class TaskService {
    constructor(private prisma: PrismaService) {}

    async createTask(data: Prisma.TaskCreateInput): Promise<Task> {
        return this.prisma.task.create({ data });
    }

    async findAll(): Promise<Task[]>{
        return this.prisma.task.findMany()
    }

    async findOne(id: number): Promise<Task>{
        return this.prisma.task.findUnique({ where: { id }});
    }

    async updateTask(id: number, data: Prisma.TaskUpdateInput): Promise<Task>{
        return this.prisma.task.update({
            where: { id },
            data,
        });
    }

    async deleteTask(id: number): Promise<Task>{
        return this.prisma.task.delete({
            where: { id }
        })
    }
}