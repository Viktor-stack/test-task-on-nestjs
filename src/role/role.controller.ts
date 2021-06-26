import {Body, Controller, Param, Post} from '@nestjs/common';
import {RoleService} from "./role.service";
import {RoleUserDto} from "./dto/role-user.dto";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Role end point')
@Controller('role')
export class RoleController {
    constructor(private roleService: RoleService) {
    }


    @Post()
    create(@Body() roleUserDto: RoleUserDto) {
        return this.roleService.createRole(roleUserDto)
    }

    @Post("/:value")
    getByValue(@Param('value') value: string) {
        return this.roleService.getRoleValue(value)
    }
}
