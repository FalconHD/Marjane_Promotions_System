import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany, CreateDateColumn } from "typeorm";
import { category } from "./category";

@Entity()
export class product {

    @PrimaryGeneratedColumn('uuid')
    id 

    @Column("varchar")
    name 

    @Column("float")
    price

    @CreateDateColumn()
    createdAt = undefined;

    @ManyToOne(() => category, cat => cat.products, { cascade: true })
    category

   
}
