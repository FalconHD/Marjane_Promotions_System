import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class superAdmin {

    @PrimaryGeneratedColumn()
    id 

    @Column("varchar")
    email 

    @Column("varchar")
    password

}
