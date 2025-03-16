import { CreateUserDto } from '@/features/users/dtos/create-user.dto';
import { UsersService } from '@/features/users/users.service';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {

    constructor(
        private usersService: UsersService,
    ) {}

    @Post()
    create(
        @Body() dto: CreateUserDto,
    ) {
        return this.usersService.create(dto);
    }

    @Get()
    find() {
        return this.usersService.find();
    }

}
