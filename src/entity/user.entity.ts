import { BeforeInsert, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Role } from './role.entity';
import { Message } from './mesage.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('user')
export class User {
  @ApiProperty({ example: 1, description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'test@gmail.com' })
  @Column({ unique: true })
  email: string;

  @ApiProperty({ example: 'John', description: 'Имя' })
  @Column({ default: '' })
  firstName: string;

  @ApiProperty({ example: 'Doe', description: 'Фамилия' })
  @Column({ default: '' })
  lastName: string;

  @ApiProperty({ example: 'Password', description: 'Пароль пользователя' })
  @Column({ type: 'varchar', length: 100, nullable: false })
  password: string;

  @ManyToOne(() => Role, role => role.role)
  role: Role;

  @OneToMany(() => Message, message => message.id)
  message: Message[];

  @BeforeInsert()
  async setPassword(password: string) {
    debugger
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(password || this.password, salt);
  }
}
