import { AppService } from '@/features/app/app.service';
import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
    ) { }

    @Get()
    getHello(
        @Res() response: Response,
    ) {
        response.status(HttpStatus.OK).send('Siyu API is running correctly.');
    }
}
