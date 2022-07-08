import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ArtistsService } from './artists.service';
import { CreateArtistInput } from './dto/create-artist.input';
import { UpdateArtistInput } from './dto/update-artist.input';

@Resolver('Artist')
export class ArtistsResolver {
  constructor(private readonly artistsService: ArtistsService) {}

  @Mutation('createArtist')
  create(@Args('createArtistInput') createArtistInput: CreateArtistInput) {
    return this.artistsService.create(createArtistInput);
  }

  @Query('artists')
  findAll() {
    return this.artistsService.findAll();
  }

  @Query('artist')
  findOne(@Args('id') id: number) {
    return this.artistsService.findOne(id);
  }

  @Mutation('updateArtist')
  update(@Args('updateArtistInput') updateArtistInput: UpdateArtistInput) {
    return this.artistsService.update(updateArtistInput.id, updateArtistInput);
  }

  @Mutation('removeArtist')
  remove(@Args('id') id: number) {
    return this.artistsService.remove(id);
  }
}
