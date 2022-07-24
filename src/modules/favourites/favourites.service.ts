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

  async findAll(context): Promise<any[]> {
    const { authorization } = context.req.headers;
    const res = await this.client.get('/', {
      headers: {
        authorization,
      },
    });
    return res.data;
  }

  async addTrackToFavourites(id: string, context: any) {
    try {
      const { authorization } = context.req.headers;
      if (!authorization) {
        console.log('🙏 Please add JWT token in HTTP Header');
        return null;
      }
      const res = await this.client.put(
        `/add`,
        {
          id,
          type: 'tracks',
        },
        {
          headers: {
            authorization,
          },
        },
      );
      console.log(`⭐ Track was added to favourites`);
      return res.data;
    } catch (err) {
      console.log(err.response.data);
    }
  }

  async addBandToFavourites(id: string, context: any) {
    try {
      const { authorization } = context.req.headers;
      if (!authorization) {
        console.log('🙏 Please add JWT token in HTTP Header');
        return null;
      }
      const res = await this.client.put(
        `/add`,
        {
          id,
          type: 'bands',
        },
        {
          headers: {
            authorization,
          },
        },
      );
      console.log(`👍 Band was added to favourites`);
      return res.data;
    } catch (err) {
      console.log(err.response.data);
    }
  }

  async addArtistToFavourites(id: string, context: any) {
    try {
      const { authorization } = context.req.headers;
      if (!authorization) {
        console.log('🙏 Please add JWT token in HTTP Header');
        return null;
      }
      const res = await this.client.put(
        `/add`,
        {
          id,
          type: 'artists',
        },
        {
          headers: {
            authorization,
          },
        },
      );
      console.log(`❤️  Artist was added to favourites`);
      return res.data;
    } catch (err) {
      console.log(err.response.data);
    }
  }

  async addGenreToFavourites(id: string, context: any) {
    try {
      const { authorization } = context.req.headers;
      if (!authorization) {
        console.log('🙏 Please add JWT token in HTTP Header');
        return null;
      }
      const res = await this.client.put(
        `/add`,
        {
          id,
          type: 'genres',
        },
        {
          headers: {
            authorization,
          },
        },
      );
      console.log(`🎸 Genre was added to favourites`);
      return res.data;
    } catch (err) {
      console.log(err.response.data);
    }
  }

  async update(
    id: string,
    updateFavouriteInput: UpdateFavouritesInput,
    context: any,
  ) {
    return `This action updates a #${id} favourites`;
  }

  async remove(id: string, context: any): Promise<any> {
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
