import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany ,OneToOne ,JoinColumn, CreateDateColumn } from "typeorm";
import { center } from "./center";

@Entity()
export class adminCenter {

    @PrimaryGeneratedColumn('uuid')
    id 

    @Column("varchar")
    email 

    @Column("varchar")
    password

    @CreateDateColumn()
    createdAt = undefined;

}
