import { UsersService } from '@/features/users/users.service';
import { Controller } from '@nestjs/common';

@Controller('users')
export class UsersController {

    constructor(
        private usersService: UsersService,
    ) {}

    // @Post()
    // create(
    //     @Body() dto: CreateUserDto,
    // ) {
    //     return this.usersService.create(dto);
    // }

    // @Get()
    // find(
    //     @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    //     @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number = 10,
    // ) {
    //     return this.usersService.find({
    //         page,
    //         limit,
    //         route: '/users',
    //     });
    // }

}
