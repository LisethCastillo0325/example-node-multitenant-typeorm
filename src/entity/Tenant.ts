import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tenant {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        nullable: false,
        length: 255
    })
    slug: string;

    @Column({
        type: 'varchar',
        nullable: false,
        length: 100
    })
    db_name: string;

    @Column({
        type: 'varchar',
        nullable: false,
        length: 255
    })
    db_host: string;

    @Column({
        type: 'varchar',
        nullable: false,
        length: 100
    })
    db_username: string;

    @Column({
        type: 'text',
        nullable: false
    })
    db_password: string;

    @Column({
        type: 'integer',
        nullable: false
    })
    db_port: string;

    @Column()
    @CreateDateColumn()
    created_at: Date;

    @Column()
    @UpdateDateColumn()
    updated_at: Date;

}