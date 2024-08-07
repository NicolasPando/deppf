import { UUID } from "crypto";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Plots } from "./plots.entity";

@Entity({ name: 'labors' })
export class Labors {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    contractor: string;

    @Column()
    price: number;

    @Column()
    surface: number;

    @ManyToOne(() => Plots, plot => plot.labors)
    plot: Plots;
}
