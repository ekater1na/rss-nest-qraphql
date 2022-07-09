import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Artist } from 'src/graphql';
import { CreateArtistInput } from './dto/create-artist.input';
import { UpdateArtistInput } from './dto/update-artist.input';

@Injectable()
export class ArtistsService {
  private client;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.ARTISTS_URL,
    });

    this.client.interceptors.response.use((res) => {
      res.data.items = res.data.items?.map((item) => ({
        ...item,
        id: item._id,
      }));
      return res;
    });
  }

  create(createArtistInput: CreateArtistInput) {
    return 'This action adds a new artist';
  }

  async findAll(limit: number, offset: number): Promise<Artist[]> {
    const res = await this.client.get('/', {
      params: { limit, offset },
    });

    return res.data.items;
  }

  async findOne(id: string): Promise<Artist> {
    const res = await this.client.get(`/${id}`);
    return res.data;
  }

  update(id: string, updateArtistInput: UpdateArtistInput) {
    return `This action updates a #${id} artist`;
  }

  async remove(id: string, context: any): Promise<Artist> {
    try {
      const { authorization } = context.req.headers;
      if (!authorization) {
        console.log('Please add JWT token in HTTP Header');
        return null;
      }
      const { res } = await this.client.delete(`/${id}`, {
        headers: {
          authorization,
        },
      });
      console.log(`Item with id ${id} was deleted`);
      return res;
    } catch (err) {
      console.log(err.response.data);
    }
  }
}
