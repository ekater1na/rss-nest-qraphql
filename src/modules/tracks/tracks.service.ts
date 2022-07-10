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

  async create(createTrackInput: CreateTrackInput, context: any) {
    try {
      const { authorization } = context.req.headers;
      if (!authorization) {
        console.log('🙏 Please add JWT token in HTTP Header');
        return null;
      }
      const res = await this.client.post(`/`, createTrackInput, {
        headers: {
          authorization,
        },
      });
      console.log(`🔥 Track was created`);
      return res.data;
    } catch (err) {
      console.log(err.response.data);
    }
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

  async update(id: string, updateTrackInput: UpdateTrackInput, context: any) {
    try {
      const { authorization } = context.req.headers;
      if (!authorization) {
        console.log('🙏 Please add JWT token in HTTP Header');
        return null;
      }
      const res = await this.client.put(`/${id}`, updateTrackInput, {
        headers: {
          authorization,
        },
      });
      console.log(`🎉 Track with id ${id} was updated`);
      return res.data;
    } catch (err) {
      console.log(err.response.data);
    }
  }

  async remove(id: string, context: any): Promise<Track> {
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
      console.log(`🔄 Track with id ${id} was deleted`);
      return res;
    } catch (err) {
      console.log(err.response.data);
    }
  }
}
