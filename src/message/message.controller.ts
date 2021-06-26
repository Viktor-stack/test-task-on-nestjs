import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageDto } from './dto/message.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('Message Api')
@UseGuards(JwtAuthGuard)
@Controller('message')
export class MessageController {

  constructor(private messageService: MessageService) {
  }

  @Get('/allMessage')
  getAllMessage() {
    return this.messageService.getAll();
  }


  @ApiOperation({ summary: 'Создать сообшение' })
  @ApiResponse({ status: 200 })
  @Post('/create')
  createMessage(@Body() messageDto: MessageDto) {
    return this.messageService.createMessage(messageDto);
  }

  @ApiOperation({ summary: 'Создать сообшение' })
  @ApiResponse({ status: 200 })
  @Post('/delete')
  deleteMessage(@Body() messageDto: MessageDto) {
    return this.messageService.delete(messageDto);
  }

}