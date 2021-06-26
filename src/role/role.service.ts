import { Injectable } from '@nestjs/common';
import { Role } from '../entity/role.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleUserDto } from './dto/role-user.dto';

@Injectable()
export class RoleService {

  constructor(@InjectRepository(Role) private roleRepos: Repository<Role>) {
  }

  async createRole(dto: RoleUserDto) {
    return await this.roleRepos.save(dto);
  }

  async getRoleValue(value: string) {
    return await this.roleRepos.findOne({ where: { value } });
  }
}
