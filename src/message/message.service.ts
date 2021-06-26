import { HttpException, HttpStatus, Injectable, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from '../entity/mesage.entity';
import { Repository } from 'typeorm';
import { MessageDto } from './dto/message.dto';
import { UsersService } from '../users/users.service';
import { Response } from 'express';

@Injectable()
export class MessageService {

  constructor(@InjectRepository(Message) private messageRepository: Repository<Message>,
              private userService: UsersService) {
  }

  async createMessage(messageDto: MessageDto) {
    const message = await this.messageRepository.create(messageDto);
    message.user = await this.userService.getByUserId(messageDto.userId);
    return this.messageRepository.save(message);
  }

  async delete(id: number, userId: number, @Res() res: Response) {
    const message = await this.messageRepository.findOne(id, { relations: ['user'] });
    debugger
    if (message.user.id === userId) {
      await this.messageRepository.delete(id);
      return res.status(200).json({
        message: 'Сообшение Удалено',
      });
    } else {
      throw new HttpException('Вы не имеете право удалять чужие сообщения', HttpStatus.FORBIDDEN);
    }
  }

  async getAll() {
    return await this.messageRepository.find();
  }
}
