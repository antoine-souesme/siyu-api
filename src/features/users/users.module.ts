import { User } from '@/features/users/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
    ],
})
export class UsersModule {}
