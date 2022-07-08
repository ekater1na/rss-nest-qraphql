import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AlbumsService } from './albums.service';
import { CreateAlbumInput } from './dto/create-album.input';
import { UpdateAlbumInput } from './dto/update-album.input';

@Resolver('Album')
export class AlbumsResolver {
  constructor(private readonly albumsService: AlbumsService) {}

  @Mutation('createAlbum')
  create(@Args('createAlbumInput') createAlbumInput: CreateAlbumInput) {
    return this.albumsService.create(createAlbumInput);
  }

  @Query('albums')
  findAll() {
    return this.albumsService.findAll();
  }

  @Query('album')
  findOne(@Args('id') id: number) {
    return this.albumsService.findOne(id);
  }

  @Mutation('updateAlbum')
  update(@Args('updateAlbumInput') updateAlbumInput: UpdateAlbumInput) {
    return this.albumsService.update(updateAlbumInput.id, updateAlbumInput);
  }

  @Mutation('removeAlbum')
  remove(@Args('id') id: number) {
    return this.albumsService.remove(id);
  }
}
