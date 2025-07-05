import { Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Test {
  _id: string;
  id: string;
  numberOfQuestions: number;
  category: string;
  tags: string[];
  label: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export const TestSchema = SchemaFactory.createForClass(Test);
