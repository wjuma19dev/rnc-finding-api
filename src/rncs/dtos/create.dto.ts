import { IsEnum, IsNumber, IsString } from "class-validator";
import { EnumToString } from "src/helpers/enumToString";
import { EstadoRncEnum } from "../enum";

export class CreateRncDto {

    @IsString()
    rnc: string;

    @IsString()
    razonSocial: string;

    @IsString()
    nombreComercial: string;

    @IsString()
    categoria: [];

    @IsString()
    regimenDePagos: string;

    @IsEnum(EstadoRncEnum, { 
        message: `Invalid value, state must be ${EnumToString(EstadoRncEnum)}` 
    })
    @IsString()
    estado: EstadoRncEnum;

    @IsString()
    actividadEconomica: string;

    @IsString()
    administracionLocal: string;
    
}