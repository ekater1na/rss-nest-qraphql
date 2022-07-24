import { Module } from '@nestjs/common';
import { ArtistsService } from './artists.service';
import { ArtistsResolver } from './artists.resolver';
import { BandsModule } from '../bands/bands.module';

@Module({
  providers: [ArtistsResolver, ArtistsService],
  exports: [ArtistsService],
  imports: [BandsModule],
})
export class ArtistsModule {}
