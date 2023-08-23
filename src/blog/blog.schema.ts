import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class BlogDocument extends Document {
  @Prop()
  title: string;

  @Prop()
  content: string;
}

export const BlogSchema = SchemaFactory.createForClass(BlogDocument);
