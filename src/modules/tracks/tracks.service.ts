import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Track } from 'src/graphql';
import { CreateTrackInput } from './dto/create-track.input';
import { UpdateTrackInput } from './dto/update-track.input';

@Injectable()
export class TracksService {
  private client;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.TRACKS_URL,
    });

    this.client.interceptors.response.use((res) => {
      res.data.items = res.data.items?.map((item) => ({
        ...item,
        id: item._id,
      }));
      return res;
    });
  }

  create(createTrackInput: CreateTrackInput) {
    return 'This action adds a new track';
  }

  async findAll(limit: number, offset: number): Promise<Track[]> {
    const res = await this.client.get('/', {
      params: { limit, offset },
    });

    return res.data.items;
  }

  async findOne(id: string): Promise<Track> {
    const res = await this.client.get(`/${id}`);
    return res.data;
  }

  update(id: string, updateTrackInput: UpdateTrackInput) {
    return `This action updates a #${id} track`;
  }

  async remove(id: string, context: any): Promise<Track> {
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
