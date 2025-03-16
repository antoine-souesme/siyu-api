import { CreateUserDto } from '@/features/users/dtos/create-user.dto';
import { UsersService } from '@/features/users/users.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {

    constructor(
        private usersService: UsersService,
    ) {}

    @Post()
    create(
        @Body() dto: CreateUserDto,
    ) {
        console.log(dto);
        return this.usersService.create(dto);
    }

}
