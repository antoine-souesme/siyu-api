import { AuthService } from '@/features/auth/auth.service';
import { LoginDto } from '@/features/auth/dtos/login.dto';
import { RegisterDto } from '@/features/auth/dtos/register.dto';
import { LoginResponse } from '@/features/auth/responses/login.response';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
    ) { }

    @Post('register')
    register(
        @Body() body: RegisterDto,
    ) {
        return this.authService.register(body);
    }

    @Post('login')
    @ApiResponse({ type: LoginResponse })
    login(
        @Body() body: LoginDto,
    ): Promise<LoginResponse> {
        return this.authService.login(body);
    }
}
