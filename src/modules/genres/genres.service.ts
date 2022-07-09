import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Genre } from 'src/graphql';
import { CreateGenreInput } from './dto/create-genre.input';
import { UpdateGenreInput } from './dto/update-genre.input';

@Injectable()
export class GenresService {
  private client;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.GENRES_URL,
    });

    this.client.interceptors.response.use((res) => {
      res.data.items = res.data.items?.map((item) => ({
        ...item,
        id: item._id,
      }));
      return res;
    });
  }

  async create(createGenreInput: CreateGenreInput, context: any) {
    try {
      const { authorization } = context.req.headers;
      if (!authorization) {
        console.log('🙏 Please add JWT token in HTTP Header');
        return null;
      }
      const res = await this.client.post(`/`, createGenreInput, {
        headers: {
          authorization,
        },
      });
      console.log(`🔥 Item was created`);
      return res.data;
    } catch (err) {
      console.log(err.response.data);
    }
  }

  async findAll(limit: number, offset: number): Promise<Genre[]> {
    const res = await this.client.get('/', {
      params: { limit, offset },
    });

    return res.data.items;
  }

  async findOne(id: string): Promise<Genre> {
    const res = await this.client.get(`/${id}`);
    return res.data;
  }

  async update(id: string, updateGenreInput: UpdateGenreInput, context: any) {
    try {
      const { authorization } = context.req.headers;
      if (!authorization) {
        console.log('🙏 Please add JWT token in HTTP Header');
        return null;
      }
      const res = await this.client.put(`/${id}`, updateGenreInput, {
        headers: {
          authorization,
        },
      });
      console.log(`🎉 Item with id ${id} was updated`);
      return res.data;
    } catch (err) {
      console.log(err.response.data);
    }
  }

  async remove(id: string, context: any): Promise<Genre> {
    try {
      const { authorization } = context.req.headers;
      if (!authorization) {
        console.log('🙏 Please add JWT token in HTTP Header');
        return null;
      }
      const { res } = await this.client.delete(`/${id}`, {
        headers: {
          authorization,
        },
      });
      console.log(`🔄 Item with id ${id} was deleted`);
      return res;
    } catch (err) {
      console.log(err.response.data);
    }
  }
}
