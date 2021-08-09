import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { EstadoRncEnum } from "../enum";

@Entity('rncs')
export class Rnc {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 11})
    rnc: string;

    @Column({type: "varchar", length: 255})
    razonSocial: string;

    @Column({type: "varchar", length: 155})
    nombreComercial: string;

    @Column({type: "varchar", length: 255})
    categoria: [];

    @Column({type: "varchar", length: 255})
    regimenDePagos: string;

    @Column({type: "varchar", length: 100})
    estado: EstadoRncEnum;

    @Column({type: "varchar", length: 255})
    actividadEconomica: string;

    @Column({type: "varchar", length: 255})
    administracionLocal: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
    
}