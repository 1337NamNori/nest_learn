import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {CreateItemDto} from "./dto/create-item.dto";
import {ItemsService} from "./items.service";
import {Item} from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    async findAll(): Promise<Item[]> {
        return await this.itemsService.findAll();
    }

    @Get(':id')
    async findOne(@Param() param): Promise<Item> {
        return await this.itemsService.findOne(param.id);
    }

    @Post()
    async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
        return await this.itemsService.create(createItemDto);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() updateItemDto: CreateItemDto): Promise<Item> {
        return await this.itemsService.update(id, updateItemDto);
    }

    @Delete(':id')
    async delete(@Param('id') id): Promise<Item> {
        return await this.itemsService.delete(id);
    }
}