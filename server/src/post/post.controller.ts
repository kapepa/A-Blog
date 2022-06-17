import {
  BadRequestException,
  Body,
  Controller, Delete, Get, NotFoundException, Param, Patch,
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

  @UseGuards(ExistAuthGuard)
  @Get('/admin/all')
  @ApiResponse({ status: 200, description: 'Receive all post for admin', type: PostDto })
  @ApiResponse({ status: 400, description: 'NotFoundException'})
  async receiveAdminAllPost(@Query() query): Promise<PostDto[] | NotFoundException> {
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

  @UseGuards(ExistAuthGuard)
  @Get('/one')
  @ApiResponse({ status: 200, description: 'Return one post on id', type: PostDto})
  @ApiResponse({ status: 404, description: 'NotFoundException'})
  async onePost(@Query() query): Promise<PostDto | NotFoundException> {
    try {
      return await this.postService.findOne('id', query.id, { relations: ['user'] });
    } catch (e) {
      return new NotFoundException();
    }
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @ApiResponse({ status: 200, description: 'Update post, only owner post', type: PostDto})
  @ApiResponse({ status: 404, description: 'BadRequestException'})
  @UseInterceptors(FileInterceptor('file'))
  async updatePost(@Body() body, @Req() req, @Param() param): Promise<PostDto | BadRequestException | any> {
    try {
      const post = JSON.parse(JSON.stringify(body));
      return this.postService.updatePost(param.id, req.user.id, post);
    } catch (e) {
      return new BadRequestException();
    }
  }
}
