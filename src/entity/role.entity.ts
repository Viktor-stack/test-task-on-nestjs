import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('role')
export class Role {
  @ApiProperty({ example: 1, description: 'Уникальный ID' })
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  value: string;

  @Column()
  description: string;

  @OneToMany(() => User, User => User.role)
  role: User[];
}
