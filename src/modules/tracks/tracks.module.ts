import { Module } from '@nestjs/common';
import { TracksService } from './tracks.service';
import { TracksResolver } from './tracks.resolver';
import { ArtistsModule } from '../artists/artists.module';
import { BandsModule } from '../bands/bands.module';
import { GenresModule } from '../genres/genres.module';

@Module({
  providers: [TracksResolver, TracksService],
  exports: [TracksService],
  imports: [BandsModule, ArtistsModule, GenresModule],
})
export class TracksModule {}
