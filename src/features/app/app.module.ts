import { AppController } from '@/features/app/app.controller';
import { AppService } from '@/features/app/app.service';
import { AuthModule } from '@/features/auth/auth.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5456,
            username: 'root',
            password: 'root',
            database: 'siyu',
            autoLoadEntities: true,
            migrations: [],

            // FIXME: Remove in production
            synchronize: true,
        }),
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: {
                expiresIn: '7d',
            },
        }),
        UsersModule,
        AuthModule,
    ],
    controllers: [
        AppController,
    ],
    providers: [
        AppService,
    ],
})
export class AppModule { }
