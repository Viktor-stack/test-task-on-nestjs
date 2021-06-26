import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../entity/user.entity';

export class MessageDto {
  @ApiProperty({ example: 'Message', description: 'Сообшения' })
  readonly message: string;
  @ApiProperty({ example: 1, description: 'Уникальный ID пользователя' })
  readonly userId: number;
}
