import {Controller, Get, Req, UseGuards} from '@nestjs/common';
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {JwtAuthGuard} from "../auth/guard/jwt-auth.guard";
import {CreateDto} from "../dto/create.dto";
import {UserService} from "./user.service";

@ApiTags('user')
@Controller('/api/user')
export class UserController {
  constructor(
    private userService: UserService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  @ApiResponse({ status: 200, description: 'Get user profile.', type: CreateDto})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  getProfile(@Req() req) {
    return req.user;
  }
}
