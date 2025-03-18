import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './features/app/app.module';

async function bootstrap() {

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> Application                                                                                    <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    const app = await NestFactory.create(AppModule);

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> Swagger                                                                                        <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    const config = new DocumentBuilder()
        .setTitle('Documentation')
        .setDescription('Siyu API documentation')
        .setVersion('0.1')
        .build();

    const documentFactory = () => SwaggerModule.createDocument(app, config, {
        extraModels: [
            /* Add extra models if needed here */
        ],
    });

    SwaggerModule.setup('api', app, documentFactory);

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> CORS                                                                                           <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    app.enableCors({
        origin: [
            // Local vite dev server
            'http://localhost:5173',

            // Local dev server when launching with capacitor run
            'http://192.168.1.69:8100',
        ],
    });

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> Launch application                                                                             <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
