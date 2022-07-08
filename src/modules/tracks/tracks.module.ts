import { Module } from '@nestjs/common';
import { TracksService } from './tracks.service';
import { TracksResolver } from './tracks.resolver';
import { GenresService } from '../genres/genres.service';
import { ArtistsModule } from '../artists/artists.module';
import { BandsModule } from '../bands/bands.module';

@Module({
  providers: [TracksResolver, TracksService],
  exports: [TracksService],
  imports: [BandsModule, ArtistsModule, GenresService],
})
export class TracksModule {}
