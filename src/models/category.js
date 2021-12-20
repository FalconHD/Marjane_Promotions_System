import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class category {

    @PrimaryGeneratedColumn()
    id 

    @Column("varchar")
    name 

}