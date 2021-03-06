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

  async create(createAlbumInput: CreateAlbumInput, context: any) {
    try {
      const { authorization } = context.req.headers;
      if (!authorization) {
        console.log('🙏 Please add JWT token in HTTP Header');
        return null;
      }
      const res = await this.client.post(`/`, createAlbumInput, {
        headers: {
          authorization,
        },
      });
      console.log(`🔥 Album was created`);
      return res.data;
    } catch (err) {
      console.log(err.response.data);
    }
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

  async update(id: string, updateAlbumInput: UpdateAlbumInput, context: any) {
    try {
      const { authorization } = context.req.headers;
      if (!authorization) {
        console.log('🙏 Please add JWT token in HTTP Header');
        return null;
      }
      const res = await this.client.put(`/${id}`, updateAlbumInput, {
        headers: {
          authorization,
        },
      });
      console.log(`🎉 Album with id ${id} was updated`);

      return res.data;
    } catch (err) {
      console.log(err.response.data);
    }
  }

  async remove(id: string, context: any): Promise<Album> {
    try {
      const { authorization } = context.req.headers;
      if (!authorization) {
        console.log('🙏 Please add JWT token in HTTP Header');
        return null;
      }
      const res = await this.client.delete(`/${id}`, {
        headers: {
          authorization,
        },
      });
      console.log(`🔄 Album with id ${id} was deleted`);
      return res.data;
    } catch (err) {
      console.log(err.response.data);
    }
  }
}
