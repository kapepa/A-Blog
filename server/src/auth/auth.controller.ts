import {BadRequestException, Body, Controller, Post, Req, UnauthorizedException, UseGuards} from '@nestjs/common';
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
  @ApiResponse({ status: 400, description: 'BadRequestException'})
  async createUser(@Body() body): Promise<any>{
    try{
      return this.authService.createUser(body);
    } catch ( e ) {
      return new BadRequestException();
    }
  }

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  @ApiResponse({ status: 201, description: 'Login successfully user, return Jwt token',})
  @ApiResponse({ status: 401, description: 'UnauthorizedException'})
  async login(@Req() req, @Body() body) {
    try {
      return await this.authService.login(req.user);
    } catch (e) {
      return new UnauthorizedException();
    }
  }
}
