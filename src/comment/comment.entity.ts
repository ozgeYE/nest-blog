import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('comment')
export class CommentEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        length: 1000
    })
    content: string;
}