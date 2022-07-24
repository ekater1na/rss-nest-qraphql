import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 4000;
  await app.listen(PORT);
  console.log(`
  🚀 Server running on http://localhost:${PORT}
  🎁 GraphQL playground: http://localhost:${PORT}/graphql`);
}
bootstrap();
