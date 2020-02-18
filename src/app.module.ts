import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule} from '@nestjs/mongoose'
import { CharacterModule } from './character/character.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:admin123@cluster0-wpu1n.gcp.mongodb.net/harry-potter?retryWrites=true&w=majority'),
    CharacterModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
