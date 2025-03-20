import { email } from '@/constants/regex';
import { LoginDto } from '@/features/auth/dtos/login.dto';
import { RegisterDto } from '@/features/auth/dtos/register.dto';
import { LoginResponse } from '@/features/auth/responses/login.response';
import { RegisterResponse } from '@/features/auth/responses/register.response';
import { User } from '@/features/users/user.entity';
import { ApiErrorCodes } from '@/utils/errors';
import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        private jwtService: JwtService,
    ) { }

    async register(
        dto: RegisterDto,
    ): Promise<RegisterResponse> {

        // Check if the email is correctly formatted
        if (!email.test(dto.email)) {
            throw new BadRequestException(ApiErrorCodes.RegisterEmailFormat);
        }

        // Check if the email is already taken
        const found = await this.userRepository.findOne({
            where: {
                email: dto.email,
            },
        });

        if (found) {
            throw new BadRequestException(ApiErrorCodes.RegisterEmailTaken);
        }

        // Check for the password mismatch
        if (dto.password !== dto.confirmPassword) {
            throw new BadRequestException(ApiErrorCodes.RegisterPasswordMismatch);
        }

        // Encrypt the password
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(dto.password, salt);

        // Create the user
        const user = this.userRepository.create({
            email: dto.email,
            displayName: dto.displayName,
            password,
        });

        // Save the user
        await this.userRepository.save(user);

        // TODO: Send confirmation email

        // Generate the token
        const signed = this.sign(user);

        // Return the jwt
        return signed;
    }

    async login(
        dto: LoginDto,
    ): Promise<LoginResponse> {

        // Find the user by email
        const found = await this.userRepository.findOne({
            where: {
                email: dto.email,
            },
        });

        if (!found) {
            throw new BadRequestException(ApiErrorCodes.LoginUserNotFound);
        }

        // Check password match
        const match = await bcrypt.compare(dto.password, found.password);

        if (!match) {
            throw new BadRequestException(ApiErrorCodes.LoginPasswordInvalid);
        }

        // Generate the token
        const signed = this.sign(found);

        // Return the jwt
        return signed;
    }

    sign(
        user: User,
    ) {

        const payload = {
            sub: user.id,
            email: user.email,
            displayName: user.displayName,
        };

        const signed = this.jwtService.sign(payload);

        return {
            accessToken: signed,
        };
    }
}
