import {
  Body,
  Controller,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {PostService} from "./post.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {JwtAuthGuard} from "../auth/guard/jwt-auth.guard";
import {PostDto} from "../dto/post.dto";

@ApiTags('post')
@Controller('/api/post')
export class PostController {
  constructor(
    private postService: PostService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  @ApiResponse({ status: 201, description: 'The record has been successfully created.', type: PostDto })
  @ApiResponse({ status: 400, description: 'BadRequestException'})
  @UseInterceptors(FileInterceptor('file'))
  async createUserPost(@Body() body, @Req() req): Promise<PostDto | UnauthorizedException> {
    try {
      return await this.postService.createUserPost(JSON.parse(JSON.stringify(body)), req.user.id)
    } catch (e) {
      return new UnauthorizedException();
    }
  }
}
