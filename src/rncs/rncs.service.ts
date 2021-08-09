import { Injectable } from '@nestjs/common';
import { CreateRncDto } from './dtos';

@Injectable()
export class RncsService {

    getMany() {
        return { message: 'OK' }
    }

    getOne(rncId: number) {
        return { message: 'OK' }
    }

    createOne(dto: CreateRncDto) {
        return { body: dto }
    }

    updateOne() {}
    deleteOne() {}

}
