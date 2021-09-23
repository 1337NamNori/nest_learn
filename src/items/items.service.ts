import { Injectable } from '@nestjs/common';
import {Item} from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: '111111',
            name: 'Item 1',
            description: 'This is item 1',
            qty: 136,
        },
        {
            id: '222222',
            name: 'Item 2',
            description: 'This is item 2',
            qty: 352,
        },
        {
            id: '333333',
            name: 'Item 3',
            description: 'This is item 3',
            qty: 569,
        },
    ];

    findAll(): Item[] {
        return this.items;
    }

    findOne(id: string): Item {
        return this.items.find(item => item.id === id);
    }
}
