import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Band } from 'src/graphql';
import { CreateBandInput } from './dto/create-band.input';
import { UpdateBandInput } from './dto/update-band.input';

@Injectable()
export class BandsService {
  private client;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.BANDS_URL,
    });

    this.client.interceptors.response.use((res) => {
      res.data.items = res.data.items?.map((item) => ({
        ...item,
        id: item._id,
      }));
      return res;
    });
  }

  async create(createBandInput: CreateBandInput, context: any) {
    try {
      const { authorization } = context.req.headers;
      if (!authorization) {
        console.log('🙏 Please add JWT token in HTTP Header');
        return null;
      }
      const res = await this.client.post(`/`, createBandInput, {
        headers: {
          authorization,
        },
      });
      console.log(`🔥 Band was created`);
      return res.data;
    } catch (err) {
      console.log(err.response.data);
    }
  }

  async findAll(limit: number, offset: number): Promise<Band[]> {
    const res = await this.client.get('/', {
      params: { limit, offset },
    });

    return res.data.items;
  }

  async findOne(id: string): Promise<Band> {
    const res = await this.client.get(`/${id}`);
    return res.data;
  }

  async update(id: string, updateBandInput: UpdateBandInput, context: any) {
    try {
      const { authorization } = context.req.headers;
      if (!authorization) {
        console.log('🙏 Please add JWT token in HTTP Header');
        return null;
      }
      const res = await this.client.put(`/${id}`, updateBandInput, {
        headers: {
          authorization,
        },
      });
      console.log(`🎉 Band with id ${id} was updated`);
      return res.data;
    } catch (err) {
      console.log(err.response.data);
    }
  }

  async remove(id: string, context: any): Promise<Band> {
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
      console.log(`🔄 Band with id ${id} was deleted`);
      return res;
    } catch (err) {
      console.log(err.response.data);
    }
  }
}
