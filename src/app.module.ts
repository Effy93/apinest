import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { CategoryModule } from './modules/category/category.module';
import { AdModule } from './modules/ads/ads.module';
import { databaseConfig } from './config/client';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    TypeOrmModule.forRootAsync(databaseConfig),
    UserModule, CategoryModule, AdModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
