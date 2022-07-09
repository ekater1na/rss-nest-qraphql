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

  create(createBandInput: CreateBandInput) {
    return 'This action adds a new band';
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

  update(id: string, updateBandInput: UpdateBandInput) {
    return `This action updates a #${id} band`;
  }

  remove(id: string) {
    return `This action removes a #${id} band`;
  }
}
