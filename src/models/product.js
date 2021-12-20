import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany } from "typeorm";
import { category } from "./category";

@Entity()
export class product {

    @PrimaryGeneratedColumn()
    id 

    @Column("varchar")
    name 

    @Column("float")
    price

    @ManyToOne(() => category, cat => cat.products, { cascade: true })
    category
}
