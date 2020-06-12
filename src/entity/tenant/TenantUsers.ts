import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TenantUsers {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column() 
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    email: string;

    // @Column()
    // phone: string;

    @Column()
    address: string;
}