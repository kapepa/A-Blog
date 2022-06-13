import {
  Body,
  Controller, Delete, Get, NotFoundException,
  Post, Query,
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
import {ExistAuthGuard} from "../auth/guard/exist-auth.guard";

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

  @UseGuards(JwtAuthGuard)
  @Get('/admin/all')
  @ApiResponse({ status: 200, description: 'Receive all post for admin', type: PostDto })
  @ApiResponse({ status: 400, description: 'NotFoundException'})
  async receiveAdminAllPost(@Query() query, @Req() req): Promise<any> {
    try {
      return await this.postService.receiveAllPost(query);
    } catch (e){
      return new NotFoundException();
    }
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/admin')
  @ApiResponse({ status: 200, description: 'Delete one own post'})
  @ApiResponse({ status: 404, description: 'NotFoundException'})
  async deletePost (@Query() query, @Req() req): Promise<void | NotFoundException> {
    try {
      await this.postService.deletePost(query.id, req.user.id);
    } catch (e){
      return new NotFoundException();
    }
  }
}
