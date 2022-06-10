import {Controller, Post} from '@nestjs/common';
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateDto} from "../dto/create.dto";
import {PostService} from "./post.service";

@ApiTags('post')
@Controller('/api/post')
export class PostController {
  constructor(
    private postService: PostService
  ) {}

  @Post('/create')
  @ApiResponse({ status: 201, description: 'The record has been successfully created.', type: {} as any })
  @ApiResponse({ status: 400, description: 'BadRequestException'})
  async createUserPost() {

  }
}
