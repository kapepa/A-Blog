import {Controller, Post} from '@nestjs/common';

@Controller('/api/auth')
export class AuthController {
  @Post('/create')
  async createUser(): Promise<any>{
    return 'work true'
  }
}
