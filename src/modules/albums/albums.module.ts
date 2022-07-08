import { Module } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { AlbumsResolver } from './albums.resolver';
import { ArtistsModule } from '../artists/artists.module';
import { BandsModule } from '../bands/bands.module';
import { GenresModule } from '../genres/genres.module';
import { TracksModule } from '../tracks/tracks.module';

@Module({
  providers: [AlbumsResolver, AlbumsService],
  exports: [AlbumsService],
  imports: [BandsModule, ArtistsModule, GenresModule, TracksModule],
})
export class AlbumsModule {}
