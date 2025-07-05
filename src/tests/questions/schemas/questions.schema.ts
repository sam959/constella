import { Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Question {
  id: string;
  index: number;
  label: string;
  text: string;
  choices: string[];
  testId: string;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
