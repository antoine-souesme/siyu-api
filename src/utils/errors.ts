import { applyDecorators } from "@nestjs/common";
import { ApiBadRequestResponse, ApiProperty } from "@nestjs/swagger";

export enum ApiErrorCodes {
    RegisterEmailFormat = 'register.email.format',
    RegisterEmailTaken = 'register.email.taken',
    RegisterPasswordMismatch = 'register.password.mismatch',
    LoginUserNotFound = 'login.user.not-found',
    LoginPasswordInvalid = 'login.password.invalid',
}

class ApiError {
    @ApiProperty()
    error: string;

    @ApiProperty({ enum: ApiErrorCodes, enumName: 'ApiErrorCodes' })
    message: string;

    @ApiProperty({})
    statusCode: number;
}

export const ErrorResponse = () => applyDecorators(
    ApiBadRequestResponse({ type: ApiError }),
);
