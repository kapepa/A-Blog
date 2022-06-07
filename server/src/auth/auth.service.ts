import {forwardRef, Inject, Injectable} from '@nestjs/common';
import { UserService } from "../user/user.service";
import { CreateDto } from "../dto/create.dto";
import * as bcrypt from "bcrypt";
import { config } from "dotenv";
import { UserDto } from "../dto/user.dto";
import {JwtService} from "@nestjs/jwt";

config();

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async createUser(user: CreateDto): Promise<any> {
    return this.userService.createUser(user)
  }

  async hashBcrypt(password: string): Promise<string> {
    return await bcrypt.hash(password,Number(process.env.BCRYPT_SALT));
  }

  async compareBcrypt(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compareSync(password,hash)
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne('email', email, { select: ['id','name','email','password'] } );
    const compare = await this.compareBcrypt(password, user.password);
    if (user && compare) {
      const { password, ...other } = user;
      return other;
    }
    return null;
  }


  async login(user: UserDto): Promise<{ access_token: string }> {
    const payload = { id: user.id, name: user.name, email: user.email, sub: user.id};
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}
