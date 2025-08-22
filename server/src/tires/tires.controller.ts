import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { TiresService } from './tires.service';

@Controller('tires')
export class TiresController {
    // The service is injectable so nestjs will create an instance of that class and inject it into the controller
    constructor(private tiresService: TiresService) {}

    @Get()
    findAll() {
        return this.tiresService.findAll();
    }

    @Get('secret')
    findSecret() {
        return 'unlocked a secret';
    }

    // Query parameter = “I want to filter/search through the collection.”
    // localhost:3000/tires/filter?brand=Michelin
    @Get('filter')
    filterTires(@Query('brand') brand: string) {
        console.log(brand);
        return `looking for tires of brand ${brand}`;
    }

    // Path parameter = “I know exactly which resource I want.”
    // localhost:3000/tires/345
    @Get(':id')
    findOne(@Param('id') id: string) {
        console.log(id);
        return `You are looking for the tire with id ${id}`;
    }
    
    
    @Post()
    create(@Body() input: any) {
        console.log(input);
        return 'You want to create a new tire';
    }
 }
