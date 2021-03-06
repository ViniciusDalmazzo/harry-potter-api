import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { CharacterModule } from './character/character.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Harry Potter API')
    .setDescription('API desenvolvido para estudos do NestJS')
    .setVersion('1.0')
    .addTag('Characters')
    .build();
  const document = SwaggerModule.createDocument(app, options, {
    include: [CharacterModule]
  });
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();