import { Injectable } from '@nestjs/common';
import { UserService } from "../user/user.service";
import { Post } from "./post.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
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

  async receiveAllPost(query?: IQuerySelect) {
    const { where, where_val, order, order_val, ...other} = query;
    const whereCase = !!where && !!where_val ? { where: {[where]: query.where_val}} : {};
    const orderCase = !!order && !!order_val ? { order: {[order]: query.order_val}} : {};
    const defSelection = { order: { created_at: "ASC" }, take: 5, skip: 0, ...other, ...whereCase, ...orderCase } as {};

    return await this.postRepository.find({ relations: ['user'], ...defSelection });
  }
}
