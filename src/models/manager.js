import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany, OneToOne, JoinColumn, CreateDateColumn } from "typeorm";
import { category } from "./category";
import { center } from "./center";

@Entity()
export class manager {

    @PrimaryGeneratedColumn('uuid')
    id 

    @Column("varchar")
    name

    @Column("varchar")
    email

    @Column("varchar")
    password 

    @CreateDateColumn()
    createdAt = undefined;

    @OneToOne(() => center, cent => cent.managers, { cascade: true })
    @JoinColumn()
    center


    @OneToOne(() => category, cat => cat.managers, { cascade: true })
    @JoinColumn()
    category
}
