import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Unique } from "typeorm";

@Entity()
@Unique(["email"])
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
