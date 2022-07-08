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

  create(createUserInput: CreateUserInput) {
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

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
