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

  update(id: string, updateFavouriteInput: UpdateFavouritesInput) {
    return `This action updates a #${id} favourites`;
  }

  async remove(id: string, context: any): Promise<any> {
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
