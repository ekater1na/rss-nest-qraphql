import { Module } from '@nestjs/common';
import { BandsService } from './bands.service';
import { BandsResolver } from './bands.resolver';
import { GenresModule } from '../genres/genres.module';

@Module({
  providers: [BandsResolver, BandsService],
  exports: [BandsService],
  imports: [GenresModule],
})
export class BandsModule {}
