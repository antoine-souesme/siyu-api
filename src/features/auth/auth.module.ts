import { User } from '@/features/users/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
    imports:[
        TypeOrmModule.forFeature([User]),
    ],
    controllers: [
        AuthController,
    ],
    providers: [
        AuthService,
    ],
})
export class AuthModule {}
