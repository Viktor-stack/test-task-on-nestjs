import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from '../entity/mesage.entity';
import { Repository } from 'typeorm';
import { MessageDto } from './dto/message.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class MessageService {

  constructor(@InjectRepository(Message) private messageRepository: Repository<Message>,
              private userService: UsersService) {
  }

  async createMessage(messageDto: MessageDto) {
    const message = await this.messageRepository.create(messageDto);
    // message.user = await this.userService.getByUserId(messageDto.userId);
    return this.messageRepository.save(message);
  }

  async delete(messageDto: MessageDto) {
    return await this.messageRepository.delete(messageDto);
  }

  async getAll() {
    return await this.messageRepository.find();
  }
}
