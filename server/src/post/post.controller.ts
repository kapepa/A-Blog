import {Body, Controller, Post, Req, UploadedFile, UseInterceptors} from '@nestjs/common';
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateDto} from "../dto/create.dto";
import {PostService} from "./post.service";
import {FileInterceptor} from "@nestjs/platform-express";

@ApiTags('post')
@Controller('/api/post')
export class PostController {
  constructor(
    private postService: PostService
  ) {}

  @Post('/create')
  @ApiResponse({ status: 201, description: 'The record has been successfully created.', type: {} as any })
  @ApiResponse({ status: 400, description: 'BadRequestException'})
  @UseInterceptors(FileInterceptor('file'))
  async createUserPost(@Body() body, @Req() req) {
    console.log(JSON.parse(JSON.stringify(body)))
  }
}
