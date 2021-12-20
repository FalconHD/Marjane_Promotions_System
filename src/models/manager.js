import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany ,OneToOne ,JoinColumn } from "typeorm";
import { category } from "./category";

@Entity()
export class manager {

    @PrimaryGeneratedColumn()
    id 

    @Column("varchar")
    name 

    @Column("varchar")
    email 

    @Column("varchar")
    password 
    
    @OneToOne(() => category, cat => cat.products, { cascade: true })
    @JoinColumn()

    category
}
