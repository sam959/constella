import { Controller, Get, Param } from '@nestjs/common';
import { QuestionsService } from './questions.service';

@Controller('tests/:testId/questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Get()
  findAll(@Param('testId') testId: string) {
    return this.questionsService.findAll(testId);
  }
}
