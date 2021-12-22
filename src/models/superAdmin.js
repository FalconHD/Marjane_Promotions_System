import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany, CreateDateColumn } from "typeorm";

@Entity()
export class superAdmin {

    @PrimaryGeneratedColumn('uuid')
    id 

    @Column("varchar")
    email 

    @Column("varchar")
    password

    @CreateDateColumn()
    createdAt = undefined;

}
