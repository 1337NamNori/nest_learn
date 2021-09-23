import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {CreateItemDto} from "./dto/create-item.dto";

@Controller('items')
export class ItemsController {
    @Get()
    findAll(): string {
        return 'Hello';
    }

    @Get(':id')
    findOne(@Param() param): string {
        return `Item ${param.id}`;
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