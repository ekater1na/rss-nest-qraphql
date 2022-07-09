import {
  Resolver,
  Query,
  Mutation,
  Args,
  Context,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { FavouritesService } from './favourites.service';
import { CreateFavouritesInput } from './dto/create-favourite.input';
import { UpdateFavouritesInput } from './dto/update-favourite.input';
import { ArtistsService } from '../artists/artists.service';
import { BandsService } from '../bands/bands.service';
import { GenresService } from '../genres/genres.service';
import { TracksService } from '../tracks/tracks.service';

@Resolver('Favourites')
export class FavouritesResolver {
  constructor(
    private readonly favouritesService: FavouritesService,
    private readonly tracksService: TracksService,
    private readonly bandsService: BandsService,
    private readonly artistService: ArtistsService,
    private readonly genresService: GenresService,
  ) {}

  @Mutation('createFavourites')
  create(
    @Args('createFavouritesInput') createFavouritesInput: CreateFavouritesInput,
  ) {
    return this.favouritesService.create(createFavouritesInput);
  }

  @Query('favourites')
  findAll(@Context() context: any) {
    return this.favouritesService.findAll(context);
  }

  @Mutation('updateFavourites')
  update(
    @Args('updateFavouritesInput') updateFavouritesInput: UpdateFavouritesInput,
  ) {
    return this.favouritesService.update(
      updateFavouritesInput.id,
      updateFavouritesInput,
    );
  }

  @Mutation('removeFavourites')
  remove(@Args('id') id: string, @Context() context: any) {
    return this.favouritesService.remove(id, context);
  }

  @Resolver()
  @ResolveField()
  async bands(@Parent() favourites) {
    const { bandsIds } = favourites;
    return await Promise.all(
      bandsIds.map((id) => {
        return this.bandsService.findOne(id);
      }),
    );
  }

  @Resolver()
  @ResolveField()
  async artists(@Parent() favourites) {
    const { artistsIds } = favourites;
    return await Promise.all(
      artistsIds.map((id) => {
        return this.artistService.findOne(id);
      }),
    );
  }

  @Resolver()
  @ResolveField()
  async genres(@Parent() favourites) {
    const { genresIds } = favourites;
    return await Promise.all(
      genresIds.map((id) => {
        return this.genresService.findOne(id);
      }),
    );
  }

  @Resolver()
  @ResolveField()
  async tracks(@Parent() favourites) {
    const { tracksIds } = favourites;
    return await Promise.all(
      tracksIds.map((id) => {
        return this.tracksService.findOne(id);
      }),
    );
  }
}
