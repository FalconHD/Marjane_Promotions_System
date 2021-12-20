import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany ,OneToOne ,JoinColumn } from "typeorm";
import { center } from "./center";

@Entity()
export class adminCenter {

    @PrimaryGeneratedColumn()
    id 

    @Column("varchar")
    email 

    @Column("varchar")
    password


}
