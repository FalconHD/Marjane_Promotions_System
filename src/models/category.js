import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class category {

    @PrimaryGeneratedColumn('uuid')
    id 

    @Column("varchar")
    name 

}