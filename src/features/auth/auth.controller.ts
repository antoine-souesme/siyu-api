import { AuthService } from '@/features/auth/auth.service';
import { LoginDto } from '@/features/auth/dtos/login.dto';
import { RegisterDto } from '@/features/auth/dtos/register.dto';
import { LoginResponse } from '@/features/auth/responses/login.response';
import { RegisterResponse } from '@/features/auth/responses/register.response';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
    ) { }

    @Post('register')
    @ApiOkResponse({ type: RegisterResponse })
    register(
        @Body() body: RegisterDto,
    ): Promise<RegisterResponse> {
        return this.authService.register(body);
    }

    @Post('login')
    @ApiOkResponse({ type: LoginResponse })
    login(
        @Body() body: LoginDto,
    ): Promise<LoginResponse> {
        return this.authService.login(body);
    }
}
