import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://Clemson:22042004@game-start-data.x5wknnw.mongodb.net/?retryWrites=true&w=majority'), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
