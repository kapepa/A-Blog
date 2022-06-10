import {ApiProperty} from "@nestjs/swagger";
import {PostDto} from "./post.dto";

export class UserDto {
  @ApiProperty()
  id: string;

  @ApiProperty({ type: () => PostDto })
  post?: PostDto[];

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  isActive: boolean;
}