import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { GenresModule } from './modules/genres/genres.module';
import { TracksModule } from './modules/tracks/tracks.module';
import { BandsModule } from './modules/bands/bands.module';
import { ArtistsModule } from './modules/artists/artists.module';
import { AlbumsModule } from './modules/albums/albums.module';
import { FavouritesModule } from './modules/favourites/favourites.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      playground: true,
    }),
    GenresModule,
    TracksModule,
    BandsModule,
    ArtistsModule,
    AlbumsModule,
    FavouritesModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
