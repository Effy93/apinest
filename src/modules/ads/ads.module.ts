import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ad } from './ads.entity';
import { AdController } from './ads.controller';
import { AdService } from './ads.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ad])],
  controllers: [AdController],
  providers: [AdService],
  exports: [AdService],
})
export class AdModule {}
