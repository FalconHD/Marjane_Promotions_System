import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany } from "typeorm";
import { category } from "./category";

@Entity()
export class product {

    @PrimaryGeneratedColumn('uuid')
    id 

    @Column("varchar")
    name 

    @Column("float")
    price

    @Column("timestamp")
    created_at

    @ManyToOne(() => category, cat => cat.products, { cascade: true })
    category

   
}
