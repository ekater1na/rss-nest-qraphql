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

  remove(id: string) {
    return `This action removes a #${id} track`;
  }
}
