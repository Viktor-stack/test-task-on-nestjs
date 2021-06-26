import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthUserDto } from './dto/auth-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Registration and Authorization')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @Post('/login')
  login(@Body() dto: AuthUserDto) {
    return this.authService.login(dto);
  }

  @Post('/register')
  register(@Body() dto: AuthUserDto) {
    return this.authService.register(dto);
  }
}
