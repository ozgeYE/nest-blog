import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true,
        nullable: false
    })
    username: string;

    @Column('text')
    password: string;
}