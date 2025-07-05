import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestsModule } from './tests/tests.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config'
@Module({
  imports: [
    TestsModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.MONGODB_URI ?? (() => { throw new Error('MONGODB_URI is not defined'); })()
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
