import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRncDto, UpdateRncDto } from './dtos';
import { Rnc } from './entities/rnc.entity';

@Injectable()
export class RncsService {

    constructor(
        @InjectRepository(Rnc)
        private readonly _rncsRepository: Repository<Rnc>
    ) {}

    async getMany(): Promise<Rnc[]>{
        return await this._rncsRepository.find();
    }

    async getOne(rncId: number): Promise<Rnc> {
        const rnc = await this._rncsRepository.findOne(rncId);
        if (!rnc) throw new NotFoundException();
        return rnc;
    }

    async createOne(dto: CreateRncDto): Promise<Rnc> {
        const rnc = this._rncsRepository.create(dto);
        return await this._rncsRepository.save(rnc);
    }

    updateOne(rncId: number, dto: UpdateRncDto) {
        return { message: 'updateOne', body: dto }
    }

    deleteOne(rncId: number) {
        return { message: 'deleteOne' }
    }

}
