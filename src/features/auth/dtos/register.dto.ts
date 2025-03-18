import { ApiProperty } from "@nestjs/swagger";

export class RegisterDto {
    @ApiProperty()
    email: string;

    @ApiProperty()
    displayName: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    confirmPassword: string;
}
