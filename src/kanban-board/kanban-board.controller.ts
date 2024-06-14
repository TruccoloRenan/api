import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from "@nestjs/common";
import { KanbanBoardService } from "./kanban-Board.service";
import { Prisma } from "@prisma/client";
import { IsPublic } from "src/auth/decorators/is-public.decorator";

@Controller('kanban-board')
export class KanbanBoardController {
    constructor(private readonly kanbanBoardService: KanbanBoardService) {}
    @IsPublic()
    @Post()
    create(@Body() createKanbanBoardDto: Prisma.KanbanBoardCreateInput){
        return this.kanbanBoardService.createKanbanBoard(createKanbanBoardDto);
    }
    @IsPublic()
    @Get(':user_id')
    findFist(@Param('user_id') userId: number){
        return this.kanbanBoardService.findFirst(+userId)
    }

    @IsPublic()
    @Post(':id')
    findOne(@Param('id') id: string){
        return this.kanbanBoardService.findOne(+id)
    }

    @IsPublic()
    @Put(':id')
    update(@Param('id') id:string, @Body() updateKanbanBoardDTO: Prisma.KanbanBoardUpdateInput){
        return this.kanbanBoardService.updateKanbanBoard(+id, updateKanbanBoardDTO)

    }
    @IsPublic()
    @Delete(':id')
    remove(@Param(':id') id:number){
        return this.kanbanBoardService.deleteKanbanBoard(+id)
    }
}