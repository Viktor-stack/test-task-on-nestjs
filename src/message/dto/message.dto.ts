import { ApiProperty } from '@nestjs/swagger';

export class MessageDto {
  @ApiProperty({ example: 1, description: 'Уникальный ID Message' })
  readonly id: number;
  @ApiProperty({ example: 'Message', description: 'Сообшения' })
  readonly message: string;
  @ApiProperty({ example: 1, description: 'Уникальный ID пользователя' })
  readonly userId: number;
}
