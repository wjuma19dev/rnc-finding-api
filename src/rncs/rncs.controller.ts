import { Body, Controller, Get, Post } from '@nestjs/common';
import { RncsService } from './rncs.service';
import { CreateRncDto } from './dtos';

@Controller('rncs')
export class RncsController {

    constructor( private _rncsSvc: RncsService ) {}

    @Get()
    getMany() {
        return this._rncsSvc.getMany();
    }

    @Get(':id')
    getOne(rncId: number) {
        return this._rncsSvc.getOne(rncId);
    }

    @Post()
    createOne(@Body() dto: CreateRncDto) {
        return this._rncsSvc.createOne(dto);
    }

}
