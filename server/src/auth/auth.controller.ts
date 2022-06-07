import {Body, Controller, Post, Req, UseGuards} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreateDto} from "../dto/create.dto";
import {AuthGuard} from "@nestjs/passport";

@ApiTags('auth')
@Controller('/api/auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) {}

  @Post('/create')
  @ApiResponse({ status: 201, description: 'The record has been successfully created.', type: CreateDto})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  async createUser(@Body() body): Promise<any>{
    return this.authService.createUser(body);
  }

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  @ApiResponse({ status: 201, description: 'Login successfully user, return Jwt token',})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  async login(@Req() req, @Body() body) {
    return await this.authService.login(req.user);
  }
}
