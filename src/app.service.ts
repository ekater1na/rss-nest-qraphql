import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Open GraphQL playground: http://localhost:4000/graphql';
  }
}
