import {ApiProperty} from "@nestjs/swagger";
import {UserDto} from "./user.dto";

export class PostDto {
  @ApiProperty()
  id: string;

  @ApiProperty({ type: () => UserDto })
  user?: UserDto;

  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  created_at: Date;
}