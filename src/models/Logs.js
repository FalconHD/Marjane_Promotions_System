import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany ,OneToOne ,JoinColumn, CreateDateColumn } from "typeorm";
import { center } from "./center";

@Entity()
export class logs {

    @PrimaryGeneratedColumn('uuid')
    id 

    @Column("varchar")
    target 

    @Column("varchar")
    message 

    @Column("varchar")
    status

    @CreateDateColumn()
    createdAt = undefined;


}
