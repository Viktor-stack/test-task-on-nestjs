import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { RoleService } from '../role/role.service';
import { AddRoleDto } from './dto/add-role.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepos: Repository<User>,
              private roleService: RoleService) {
  }

  async getByUserId(id: number) {
    return await this.userRepos.findOne({ id: id });
  }

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepos.create(dto);
    user.role = await this.roleService.getRoleValue('USER');
    await this.userRepos.save(user);
    return user;
  }

  async getAllUsers() {
    return await this.userRepos.find({ relations: ['role'] });
  }

  async getUserByEmail(email: string) {
    return await this.userRepos.findOne({ where: { email }, relations: ['role'] });
  }

  async addRole(dto: AddRoleDto) {
    const user = await this.userRepos.findOne(dto.userId);
    const roleId = await this.roleService.getRoleValue(dto.value);
    if (roleId && user) {
      user.role = roleId;
      await this.userRepos.save(user);
      return dto;
    }
    throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND);
  }
}
