import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Album } from 'src/graphql';
import { CreateAlbumInput } from './dto/create-album.input';
import { UpdateAlbumInput } from './dto/update-album.input';

@Injectable()
export class AlbumsService {
  private client;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.ALBUMS_URL,
    });

    this.client.interceptors.response.use((res) => {
      res.data.items = res.data.items?.map((item) => ({
        ...item,
        id: item._id,
      }));
      return res;
    });
  }
  
  create(createAlbumInput: CreateAlbumInput) {
    return 'This action adds a new album';
  }

  async findAll(limit: number, offset: number): Promise<Album[]> {
    const res = await this.client.get('/', {
      params: { limit, offset },
    });
    return res.data.items;
  }

  async findOne(id: string): Promise<Album> {
    const res = await this.client.get(`/${id}`);
    return res.data;
  }

  update(id: number, updateAlbumInput: UpdateAlbumInput) {
    return `This action updates a #${id} album`;
  }

  remove(id: number) {
    return `This action removes a #${id} album`;
  }
}
