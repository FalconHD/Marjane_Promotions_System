import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany, CreateDateColumn } from "typeorm";

@Entity()
export class category {

    @PrimaryGeneratedColumn('uuid')
    id 

    @Column("varchar")
    name 

    @CreateDateColumn()
    createdAt = undefined;

}