import {forwardRef, Inject, Injectable} from '@nestjs/common';
import {CreateDto} from "../dto/create.dto";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";
import {AuthService} from "../auth/auth.service";
import {UserDto} from "../dto/user.dto";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
  ) {}

  async createUser(profile: CreateDto) {
    const password = await this.authService.hashBcrypt(profile.password);
    return this.usersRepository.save(this.usersRepository.create({...profile, password}));
  }

  async findOne(key: string, val: string, options? : { relations?: string[], select?: string[] }): Promise<UserDto> {
    return this.usersRepository.findOne({ where:{[key]: val}, ...options as any });
  }
};
