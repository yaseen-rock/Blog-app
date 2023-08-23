import { Controller, Post, Get, Body } from '@nestjs/common';
import { BlogService } from './blog.service';
import { Blog } from './blog.interface';

@Controller('blogs')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  async createBlog(@Body() blogDto: { title: string; content: string }): Promise<Blog> {
    return this.blogService.createBlog(blogDto.title, blogDto.content);
  }

  @Get()
  async getAllBlogs(): Promise<Blog[]> {
    return this.blogService.getAllBlogs();
  }
}
