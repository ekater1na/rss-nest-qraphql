import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { CreateFavouritesInput } from './dto/create-favourite.input';
import { UpdateFavouritesInput } from './dto/update-favourite.input';

@Injectable()
export class FavouritesService {
  private client;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.FAVORITES_URL,
    });
  }
  // Favourites
  async findAll(context): Promise<any[]> {
    const { authorization } = context.req.headers;
    const { res } = await this.client.get('/', {
      headers: {
        authorization,
      },
    });
    console.log(context.req.headers.authorization);

    return res;
  }

  create(createFavouriteInput: CreateFavouritesInput) {
    return 'This action adds a new favourites';
  }

  update(id: number, updateFavouriteInput: UpdateFavouritesInput) {
    return `This action updates a #${id} favourites`;
  }

  remove(id: number) {
    return `This action removes a #${id} favourites`;
  }
}
