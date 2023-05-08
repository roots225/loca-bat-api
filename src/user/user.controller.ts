import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { UserService } from './user.service';
import { addUserDto, deleteDto } from './dto';

@ApiTags('users')
@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }

  @Post('add')
  add(@Body() dto: addUserDto) {
    return this.userService.add(dto);
  }

  @Delete('delete/:id')
  delete(@Param() dto: deleteDto) {
    return this.userService.delete(dto);
  }
}
