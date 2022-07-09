import {
  Resolver,
  ResolveField,
  Parent,
  Query,
  Mutation,
  Args,
  Context,
} from '@nestjs/graphql';
import { TracksService } from './tracks.service';
import { CreateTrackInput } from './dto/create-track.input';
import { UpdateTrackInput } from './dto/update-track.input';
import { BandsService } from '../bands/bands.service';
import { ArtistsService } from '../artists/artists.service';
import { GenresService } from '../genres/genres.service';

@Resolver('Track')
export class TracksResolver {
  constructor(
    private readonly tracksService: TracksService,
    private readonly bandsService: BandsService,
    private readonly artistService: ArtistsService,
    private readonly genresService: GenresService,
  ) {}

  @Mutation('createTrack')
  create(@Args('createTrackInput') createTrackInput: CreateTrackInput) {
    return this.tracksService.create(createTrackInput);
  }

  @Query('tracks')
  findAll(
    @Args('limit', { defaultValue: 5 }) limit: number,
    @Args('offset', { defaultValue: 0 }) offset: number,
  ) {
    return this.tracksService.findAll(limit, offset);
  }

  @Query('track')
  findOne(@Args('id') id: string) {
    return this.tracksService.findOne(id);
  }

  @Mutation('updateTrack')
  update(@Args('updateTrackInput') updateTrackInput: UpdateTrackInput) {
    return this.tracksService.update(updateTrackInput.id, updateTrackInput);
  }

  @Mutation('deleteTrack')
  remove(@Args('id') id: string, @Context() context: any) {
    return this.tracksService.remove(id, context);
  }

  @Resolver()
  @ResolveField()
  async bands(@Parent() track) {
    const { bandsIds } = track;
    return await Promise.all(
      bandsIds.map((id) => {
        return this.bandsService.findOne(id);
      }),
    );
  }

  @Resolver()
  @ResolveField()
  async artists(@Parent() track) {
    const { artistsIds } = track;
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
}
