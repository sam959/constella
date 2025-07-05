import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question } from './schemas/questions.schema';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Question.name) private questionModel: Model<Question>
  ) {}
  findAll(testId: string) {
    return this.questionModel.aggregate([
      { $match: { testId: testId } },
      { $project: { _id: 0, id: 1, index: 1, label: 1, text: 1, choices: 1 } },
    ]);
  }
}
