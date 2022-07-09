import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { User } from 'src/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  private client;

  constructor() {
    this.client = axios.create({
      baseURL: process.env.USERS_URL,
    });
  }

  async create(createUserInput: CreateUserInput, context: any) {
    return 'This action adds a new user';
  }

  async getJwt(email: string, password: string) {
    const res = await this.client.post('/login', { email, password });
    return res.data;
  }

  async findUser(id: string): Promise<User> {
    const res = await this.client.get(`/${id}`);
    return res.data;
  }

  async update(id: string, updateUserInput: UpdateUserInput, context: any) {
    return `This action updates a #${id} user`;
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
