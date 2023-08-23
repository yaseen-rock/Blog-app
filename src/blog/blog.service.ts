// backend/src/blog/blog.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BlogDocument } from './blog.schema';
import { Blog } from './blog.interface';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(BlogDocument.name) private blogModel: Model<BlogDocument>,
  ) {}

  async createBlog(title: string, content: string): Promise<Blog> {
    const createdBlog = new this.blogModel({ title, content });
    return createdBlog.save();
  }

  async getAllBlogs(): Promise<Blog[]> {
    return this.blogModel.find().exec();
  }
}
