import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    code;

    @Column("varchar")
    nom = "";

    @Column("varchar")
    prenom = "";

    @Column("varchar")
    email = "";

    @Column("varchar")
    role = "";

    @Column("varchar")
    phone = "";

    @Column("varchar")
    password = "";

    @OneToMany(() => Reserve, { cascade: true })
    myReservations;

    @CreateDateColumn()
    createdAt = undefined;

}