import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Test } from './schemas/tests.schema';
@Injectable()
export class TestsService {
  constructor(@InjectModel(Test.name) private testModel: Model<Test>) {}

  findAll() {
    return this.testModel
      .aggregate([{ $project: { _id: 0, id: 1, label: 1 } }])
      .exec();
  }

  async findOne(id: string) {
    const results = await this.testModel
      .aggregate([
        { $match: { id: id } },
        {
          $project: {
            _id: 0,
            id: 1,
            label: 1,
            description: 1,
            numberOfQuestions: 1,
          },
        },
      ])
      .exec();
    return results[0];
  }
}
