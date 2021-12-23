import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Unique, OneToOne, JoinColumn } from "typeorm";
import { center } from "./center";

@Entity()
@Unique(["email"])
export class adminCenter {

    @PrimaryGeneratedColumn('uuid')
    id

    @Column("varchar")
    email

    @Column("varchar")
    password

    @OneToOne(() => center, admin => admin.adminCenter)
    @JoinColumn()
    center

    @CreateDateColumn()
    createdAt = undefined;



}
