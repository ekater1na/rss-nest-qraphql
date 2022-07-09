import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ArtistsService } from '../artists/artists.service';
import { BandsService } from '../bands/bands.service';
import { GenresService } from '../genres/genres.service';
import { TracksService } from '../tracks/tracks.service';
import { AlbumsService } from './albums.service';
import { CreateAlbumInput } from './dto/create-album.input';
import { UpdateAlbumInput } from './dto/update-album.input';

@Resolver('Album')
export class AlbumsResolver {
  constructor(
    private readonly albumsService: AlbumsService,
    private readonly tracksService: TracksService,
    private readonly bandsService: BandsService,
    private readonly artistService: ArtistsService,
    private readonly genresService: GenresService,
  ) {}

  @Mutation('createAlbum')
  create(@Args('createAlbumInput') createAlbumInput: CreateAlbumInput) {
    return this.albumsService.create(createAlbumInput);
  }

  @Query('albums')
  findAll(
    @Args('limit', { defaultValue: 5 }) limit: number,
    @Args('offset', { defaultValue: 0 }) offset: number,
  ) {
    return this.albumsService.findAll(limit, offset);
  }

  @Query('album')
  findOne(@Args('id') id: string) {
    return this.albumsService.findOne(id);
  }

  @Mutation('updateAlbum')
  update(@Args('updateAlbumInput') updateAlbumInput: UpdateAlbumInput) {
    return this.albumsService.update(updateAlbumInput.id, updateAlbumInput);
  }

  @Mutation('removeAlbum')
  remove(@Args('id') id: string) {
    return this.albumsService.remove(id);
  }

  @Resolver()
  @ResolveField()
  async bands(@Parent() album) {
    const { bandsIds } = album;
    return await Promise.all(
      bandsIds.map((id) => {
        return this.bandsService.findOne(id);
      }),
    );
  }

  @Resolver()
  @ResolveField()
  async artists(@Parent() album) {
    const { artistsIds } = album;
    return await Promise.all(
      artistsIds.map((id) => {
        return this.artistService.findOne(id);
      }),
    );
  }

  @Resolver()
  @ResolveField()
  async genres(@Parent() album) {
    const { genresIds } = album;
    return await Promise.all(
      genresIds.map((id) => {
        return this.genresService.findOne(id);
      }),
    );
  }

  @Resolver()
  @ResolveField()
  async tracks(@Parent() album) {
    const { tracksIds } = album;
    return await Promise.all(
      tracksIds.map((id) => {
        return this.tracksService.findOne(id);
      }),
    );
  }
}
