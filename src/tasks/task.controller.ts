import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from "@nestjs/common";
import { TaskService } from "./task.service";
import { Prisma } from "@prisma/client";
import { IsPublic } from "src/auth/decorators/is-public.decorator";

@Controller('/tasks')
export class TasksController {
    constructor(private readonly taskService: TaskService) {}

    @IsPublic()
    @Post()
    create(@Body() createTaskDto: Prisma.TaskCreateInput){
        return this.taskService.createTask(createTaskDto);
    }

    @IsPublic()
    @Get()
    findAll(){
        return this.taskService.findAll();
    }

    @IsPublic()
    @Get(':id')
    findOne(@Param('id') id: string){
        return this.taskService.findOne(+id)
    }

    @IsPublic()
    @Put(':id')
    update(@Param('id') id: string, @Body() updateTaskDTO: Prisma.TaskUpdateInput){
        return this.taskService.updateTask(+id, updateTaskDTO)

    }
    @IsPublic()
    @Delete(':id')
    remove(@Param('id') id: number){
        console.log(id)
        return this.taskService.deleteTask(+id)
    }
}