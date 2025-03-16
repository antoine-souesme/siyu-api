import { CreateUserDto } from '@/features/users/dtos/create-user.dto';
import { User } from '@/features/users/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) { }

    async create(
        dto: CreateUserDto,
    ) {
        const created = this.userRepository.create(dto);
        const saved = await this.userRepository.save(created);
        return saved;
    }

    async find(
        options: IPaginationOptions,
    ) {
        const users = paginate<User>(this.userRepository, options);
        return users;
    }

}
