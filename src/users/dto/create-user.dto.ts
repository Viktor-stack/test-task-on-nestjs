import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: 'test@gmail.com', description: "Почтовый яшик"})
    readonly email: string;
    @ApiProperty({example: "123456", description: "Пороль пользователя"})
    readonly password: string;
}
