import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './features/app/app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> Swagger                                                                                        <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    const config = new DocumentBuilder()
        .setTitle('Documentation')
        .setDescription('Siyu API documentation')
        .setVersion('0.1')
        .build();

    const documentFactory = () => SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api', app, documentFactory);

    //>────────────────────────────────────────────────────────────────────────────────────────────────<
    //> Launch application                                                                             <
    //>────────────────────────────────────────────────────────────────────────────────────────────────<

    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
