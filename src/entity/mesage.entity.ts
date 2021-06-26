import {Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {User} from "./user.entity";

@Entity("message")
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    message: string;

    @UpdateDateColumn({type: "timestamp"})
    createDate: Date

    @UpdateDateColumn()
    updateDate: Date

    @ManyToOne(() => User, user => user.id)
    user: User
}
