import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany } from "typeorm";
import { adminCenter } from "./adminCenter";
import { product } from "./product";

@Entity()
export class promotion {

    @PrimaryGeneratedColumn()
    id 

    @Column("int")
    pourcentage 

    @Column("int")
    carteFidélité

    @ManyToOne(() => adminCenter, admin => admin.adminCenter, { cascade: true })
    adminCenter

    @ManyToOne(() => product, product => product.products)
    product

}
