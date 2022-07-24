import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { GenresService } from './genres.service';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';

@Resolver('Genre')
export class GenresResolver {
  constructor(private readonly genresService: GenresService) {}

  @Mutation('createGenre')
  create(
    @Args('createGenreInput') createGenreInput: CreateGenreInput,
    @Context() context: any,
  ) {
    return this.genresService.create(createGenreInput, context);
  }

  @Query('genres')
  findAll(
    @Args('limit', { defaultValue: 5 }) limit: number,
    @Args('offset', { defaultValue: 0 }) offset: number,
  ) {
    return this.genresService.findAll(limit, offset);
  }

  @Query('genre')
  findOne(@Args('id') id: string) {
    return this.genresService.findOne(id);
  }

  @Mutation('updateGenre')
  update(
    @Args('updateGenreInput') updateGenreInput: UpdateGenreInput,
    @Context() context: any,
  ) {
    return this.genresService.update(
      updateGenreInput.id,
      updateGenreInput,
      context,
    );
  }

  @Mutation('deleteGenre')
  remove(@Args('id') id: string, @Context() context: any) {
    return this.genresService.remove(id, context);
  }
}
