import { Injectable } from '@nestjs/common';
import { UserService } from "../user/user.service";
import { Post } from "./post.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PostDto } from "../dto/post.dto";

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
}
