import { applyDecorators } from "@nestjs/common";
import { ApiBadRequestResponse, ApiProperty } from "@nestjs/swagger";

class ApiError {
    @ApiProperty()
    error: string;

    @ApiProperty()
    message: string;

    @ApiProperty({})
    statusCode: number;
}

export const ErrorResponse = () => applyDecorators(
    ApiBadRequestResponse({ type: ApiError }),
);
