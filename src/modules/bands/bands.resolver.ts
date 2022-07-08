import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BandsService } from './bands.service';
import { CreateBandInput } from './dto/create-band.input';
import { UpdateBandInput } from './dto/update-band.input';

@Resolver('Band')
export class BandsResolver {
  constructor(private readonly bandsService: BandsService) {}

  @Mutation('createBand')
  create(@Args('createBandInput') createBandInput: CreateBandInput) {
    return this.bandsService.create(createBandInput);
  }

  @Query('bands')
  findAll() {
    return this.bandsService.findAll();
  }

  @Query('band')
  findOne(@Args('id') id: number) {
    return this.bandsService.findOne(id);
  }

  @Mutation('updateBand')
  update(@Args('updateBandInput') updateBandInput: UpdateBandInput) {
    return this.bandsService.update(updateBandInput.id, updateBandInput);
  }

  @Mutation('removeBand')
  remove(@Args('id') id: number) {
    return this.bandsService.remove(id);
  }
}
