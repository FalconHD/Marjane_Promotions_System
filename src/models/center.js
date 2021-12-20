import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany ,OneToOne ,JoinColumn } from "typeorm";
import { adminCenter } from "./adminCenter";

@Entity()
export class center {

    @PrimaryGeneratedColumn()
    id 

    @Column("varchar")
    name 

    @Column("varchar")
    city 

    @OneToOne(() => adminCenter, admin => admin.center)
    @JoinColumn()

    adminCenter

}
