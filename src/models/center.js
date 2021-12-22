import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany ,OneToOne ,JoinColumn } from "typeorm";
import { adminCenter } from "./adminCenter";

@Entity()
export class center {

    @PrimaryGeneratedColumn('uuid')
    id 

    @Column("varchar")
    name 

    @Column("varchar")
    city 

    @Column("timestamp")
    created_at

    @OneToOne(() => adminCenter, admin => admin.center)
    @JoinColumn()

    adminCenter

}
