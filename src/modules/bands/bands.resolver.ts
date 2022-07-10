import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
  Context,
} from '@nestjs/graphql';
import { GenresService } from '../genres/genres.service';
import { BandsService } from './bands.service';
import { CreateBandInput } from './dto/create-band.input';
import { UpdateBandInput } from './dto/update-band.input';

@Resolver('Band')
export class BandsResolver {
  constructor(
    private readonly bandsService: BandsService,
    private readonly genresService: GenresService,
  ) {}

  @Mutation('createBand')
  create(
    @Args('createBandInput') createBandInput: CreateBandInput,
    @Context() context: any,
  ) {
    return this.bandsService.create(createBandInput, context);
  }

  @Query('bands')
  findAll(
    @Args('limit', { defaultValue: 5 }) limit: number,
    @Args('offset', { defaultValue: 0 }) offset: number,
  ) {
    return this.bandsService.findAll(limit, offset);
  }

  @Query('band')
  findOne(@Args('id') id: string) {
    return this.bandsService.findOne(id);
  }

  @Mutation('updateBand')
  update(
    @Args('updateBandInput') updateBandInput: UpdateBandInput,
    @Context() context: any,
  ) {
    return this.bandsService.update(
      updateBandInput.id,
      updateBandInput,
      context,
    );
  }

  @Mutation('deleteBand')
  remove(@Args('id') id: string, @Context() context: any) {
    return this.bandsService.remove(id, context);
  }

  @Resolver()
  @ResolveField()
  async genres(@Parent() band) {
    const { genresIds } = band;
    return await Promise.all(
      genresIds.map((id) => {
        return this.genresService.findOne(id);
      }),
    );
  }
}
