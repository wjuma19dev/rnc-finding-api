import { PartialType } from "@nestjs/mapped-types";
import { CreateRncDto } from ".";


export class UpdateRncDto extends PartialType(CreateRncDto) {}