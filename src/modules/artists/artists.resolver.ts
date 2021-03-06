import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
  Context,
} from '@nestjs/graphql';
import { BandsService } from '../bands/bands.service';
import { ArtistsService } from './artists.service';
import { CreateArtistInput } from './dto/create-artist.input';
import { UpdateArtistInput } from './dto/update-artist.input';

@Resolver('Artist')
export class ArtistsResolver {
  constructor(
    private readonly artistsService: ArtistsService,
    private readonly bandsService: BandsService,
  ) {}

  @Mutation('createArtist')
  create(
    @Args('createArtistInput') createArtistInput: CreateArtistInput,
    @Context() context: any,
  ) {
    return this.artistsService.create(createArtistInput, context);
  }

  @Query('artists')
  findAll(
    @Args('limit', { defaultValue: 5 }) limit: number,
    @Args('offset', { defaultValue: 0 }) offset: number,
  ) {
    return this.artistsService.findAll(limit, offset);
  }

  @Query('artist')
  findOne(@Args('id') id: string) {
    return this.artistsService.findOne(id);
  }

  @Mutation('updateArtist')
  update(
    @Args('updateArtistInput') updateArtistInput: UpdateArtistInput,
    @Context() context: any,
  ) {
    return this.artistsService.update(
      updateArtistInput.id,
      updateArtistInput,
      context,
    );
  }

  @Mutation('deleteArtist')
  remove(@Args('id') id: string, @Context() context: any) {
    return this.artistsService.remove(id, context);
  }

  @Resolver()
  @ResolveField()
  async bands(@Parent() artist) {
    const { bandsIds } = artist;
    return await Promise.all(
      bandsIds.map((id) => {
        return this.bandsService.findOne(id);
      }),
    );
  }
}
