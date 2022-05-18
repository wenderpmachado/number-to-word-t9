import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type WordDocument = Word & Document;

@Schema()
export class Word {
  @Prop({ required: true })
  term: string;

  @Prop({ required: true })
  frequency: number;
}

export const WordSchema = SchemaFactory.createForClass(Word);
