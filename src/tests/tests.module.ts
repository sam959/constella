import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsController } from './questions/questions.controller';
import { QuestionsService } from './questions/questions.service';
import { Question, QuestionSchema } from './questions/schemas/questions.schema';
import { Test, TestSchema } from './schemas/tests.schema';
import { TestsController } from './tests.controller';
import { TestsService } from './tests.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Test.name, schema: TestSchema },
      { name: Question.name, schema: QuestionSchema },
    ]),
  ],
  controllers: [TestsController, QuestionsController],
  providers: [TestsService, QuestionsService],
})
export class TestsModule {}
