import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TracksService } from './tracks.service';
import { CreateTrackInput } from './dto/create-track.input';
import { UpdateTrackInput } from './dto/update-track.input';

@Resolver('Track')
export class TracksResolver {
  constructor(private readonly tracksService: TracksService) {}

  @Mutation('createTrack')
  create(@Args('createTrackInput') createTrackInput: CreateTrackInput) {
    return this.tracksService.create(createTrackInput);
  }

  @Query('tracks')
  findAll() {
    return this.tracksService.findAll();
  }

  @Query('track')
  findOne(@Args('id') id: number) {
    return this.tracksService.findOne(id);
  }

  @Mutation('updateTrack')
  update(@Args('updateTrackInput') updateTrackInput: UpdateTrackInput) {
    return this.tracksService.update(updateTrackInput.id, updateTrackInput);
  }

  @Mutation('removeTrack')
  remove(@Args('id') id: number) {
    return this.tracksService.remove(id);
  }
}
