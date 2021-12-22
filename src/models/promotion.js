import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany } from "typeorm";
import { adminCenter } from "./adminCenter";
import { product } from "./product";

@Entity()
export class promotion {

    @PrimaryGeneratedColumn('uuid')
    id 

    @Column("int")
    pourcentage 

    @Column("int")
    carteFidélité

    @Column("timestamp")
    created_at

    @ManyToOne(() => adminCenter, admin => admin.adminCenter, { cascade: true })
    adminCenter

    @ManyToOne(() => product, product => product.products)
    product

    

}
