import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {CreateItemDto} from "./dto/create-item.dto";
import {ItemsService} from "./items.service";
import {Item} from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    findAll(): Item[] {
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param() param): Item {
        return this.itemsService.findOne(param.id);
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): string {
        return `Name: ${createItemDto.name}; Description: ${createItemDto.description}; Quantity: ${createItemDto.qty}`;
    }

    @Put(':id')
    update(@Param('id') id, @Body() updateItemDto: CreateItemDto): string {
        return `updated item ${id} - name: ${updateItemDto.name}`
    }

    @Delete(':id')
    delete(@Param('id') id): string {
        return `Deleted item: ${id}`;
    }
}