import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Prisma, Task } from "@prisma/client";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { LogsService } from "src/logs/logs.service";
import { Log, LogDocument } from '../logs/schemas/log.schema';

@Injectable()
export class TaskService {
    constructor(
        @InjectModel(Log.name) private taskModel: Model<LogDocument>,
        private logService: LogsService,
        private prisma: PrismaService
    ) { }

    async createTask(data: Prisma.TaskCreateInput): Promise<Task> {

        const createdTask = this.prisma.task.create({ data });

        const log = new this.taskModel(data);
        await log.save();
        await this.logService.createLog("Task Created " + createdTask);

        return createdTask;
    }

    async findAll(): Promise<Task[]> {
        return this.prisma.task.findMany()
    }

    async findOne(id: number): Promise<Task> {
        return this.prisma.task.findUnique({ where: { id } });
    }

    async updateTask(id: number, data: Prisma.TaskUpdateInput): Promise<Task> {
        const updateTask = this.prisma.task.update({
            where: { id },
            data,
        });
        const objectId = new Types.ObjectId(id);
        const log = await this.taskModel.findByIdAndUpdate(objectId, data, { new: true }).exec()
        await this.logService.createLog("Task Updated" + updateTask);

        return updateTask
    }

    async deleteTask(id: number): Promise<Task> {
        const deletedTask = this.prisma.task.delete({
            where: { id }
        })
        const objectId = new Types.ObjectId(id);
        const log = await this.taskModel.findByIdAndDelete(objectId).exec();
        await this.logService.createLog("Task Deleted" + deletedTask)
        return deletedTask
    }
}