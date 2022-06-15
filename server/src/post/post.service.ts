import {ConflictException, Injectable, NotFoundException} from '@nestjs/common';
import { UserService } from "../user/user.service";
import { Post } from "./post.entity";
import { InjectRepository } from "@nestjs/typeorm";
import {Equal, Like, Repository} from "typeorm";
import { PostDto } from "../dto/post.dto";

interface IQuerySelect {
  where?: string,
  where_val?: string | number | boolean,
  order?: string,
  order_val?: '' | "ASC" | "DESC",
  skip?: number,
  take?: number,
}

@Injectable()
export class PostService {

  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
    private userService: UserService,
  ) {}

  async createUserPost(post: {title: string, content: string}, userID: string): Promise<PostDto> {
    const user = await this.userService.findOne('id', userID);
    return await this.postRepository.save(this.postRepository.create({...post, user}))
  }

  async findOne(key: string, val: string, options?: { relations: string[], }): Promise<PostDto> {
    return this.postRepository.findOne({ where: { [key]: val }, ...options })
  }

  async deletePost(postID: string, userID: string): Promise<void> {
    const post = await this.findOne('id', postID, { relations: ['user'] });

    if(post.user.id !== userID) throw new NotFoundException();
    await this.postRepository.delete({ id: postID });
  }

  async receiveAllPost(query?: IQuerySelect) {
    const { where, where_val, order, order_val, ...other} = query;
    const whereCase = !!where && !!where_val ? { where: {[where]: Like(`%${where_val}%`)}} : {};
    const orderCase = !!order && !!order_val ? { order: {[order]: order_val}} : {};
    const defSelection = { order: { created_at: "ASC" }, take: 5, skip: 0, ...other, ...whereCase, ...orderCase } as {};

    return await this.postRepository.find({ relations: ['user'], ...defSelection });
  }

  async updatePost(postID: string, userID: string, post: PostDto): Promise<PostDto | ConflictException> {
    const currentPost = await this.findOne('id', postID, { relations: ['user'] });
    if( currentPost.id !== postID || currentPost.user.id !== userID ) return new ConflictException();
    return await this.postRepository.save({...currentPost, ...post});
  }
}
