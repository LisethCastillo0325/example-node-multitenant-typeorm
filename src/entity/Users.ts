import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column() 
    firstname: string;

    @Column()
    lastname: string;
}