import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {

  async createUserPost() {
    console.log('post')
  }
}
