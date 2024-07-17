import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
   .setTitle('Migration App API')
  .setDescription('API for Migration App')
  .setVersion('1.0')
  .addTag('Migration backend API')
  .addBearerAuth()
  .build();

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);

  console.log("--------------------------------------------------------------------------------------");
  console.log(`Server running on port ${PORT} and you can access the API at http://localhost:${PORT}/api`);
  console.log("--------------------------------------------------------------------------------------");
  console.log(`Swagger documentation available at http://localhost:${PORT}/api`);
  console.log("--------------------------------------------------------------------------------------");
  console.log(`MongoDB connection string: ${process.env.MONGODB_URI}`);
  console.log("--------------------------------------------------------------------------------------");
}
bootstrap();
