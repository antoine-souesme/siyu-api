import { AppController } from '@/features/app/app.controller';
import { AppService } from '@/features/app/app.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5455,
            username: 'root',
            password: 'root',
            database: 'siyu',
            autoLoadEntities: true,
            migrations: [],

            // FIXME: Remove in production
            synchronize: true,
        }),
        UsersModule,
    ],
    controllers: [
        AppController,
    ],
    providers: [
        AppService,
    ],
})
export class AppModule { }
