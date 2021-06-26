import {ApiProperty} from "@nestjs/swagger";

export class RoleUserDto {
    @ApiProperty({example: 'ADMIN', description: 'Описание пользователя'})
    readonly value: string;
    @ApiProperty({example: 'Description', description: 'Опесание роли пользователя'})
    readonly description: string;
}
