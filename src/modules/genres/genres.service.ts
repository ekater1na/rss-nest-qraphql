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

  create(createGenreInput: CreateGenreInput) {
    return 'This action adds a new genre';
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

  update(id: number, updateGenreInput: UpdateGenreInput) {
    return `This action updates a #${id} genre`;
  }

  remove(id: number) {
    return `This action removes a #${id} genre`;
  }
}
