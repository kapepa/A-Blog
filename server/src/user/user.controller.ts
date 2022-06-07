import { Controller } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";

@ApiTags('user')
@Controller('/api/user')
export class UserController {}
