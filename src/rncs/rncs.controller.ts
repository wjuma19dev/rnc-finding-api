import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { RncsService } from './rncs.service';
import { CreateRncDto, UpdateRncDto } from './dtos';

@Controller('rncs')
export class RncsController {

    constructor( private _rncsSvc: RncsService ) {}

    @Get()
    async getMany() {
        const rncs = await this._rncsSvc.getMany();
        return {
            message: 'Fetching rncs list',
            data: rncs
        }
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) rncId: number) {
        return await this._rncsSvc.getOne(rncId);
    }

    @Post()
    async createOne(@Body() dto: CreateRncDto) {
        const rnc = await this._rncsSvc.createOne(dto);
        return {
            message: 'Rnc create successfully',
            data: rnc
        }
    }

    @Put(':id')
    updateOne(
        @Param('id', ParseIntPipe) rncId: number,
        @Body() dto: UpdateRncDto
    ) {
        return this._rncsSvc.updateOne(rncId, dto);
    }

    @Delete(':id')
    deleteOne(@Param('id', ParseIntPipe) rncId: number) {
        return this._rncsSvc.deleteOne(rncId);
    }

}
