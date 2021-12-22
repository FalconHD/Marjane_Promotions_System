import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Unique } from "typeorm";
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

    @CreateDateColumn()
    createdAt = undefined;

}
