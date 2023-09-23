import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { AddRoleDto, CreateUserDto } from "./dto /user.dto";
import { Roles } from "../auth/roles.auth.decorator";
import { RolesGuard } from "../auth/roles.guard";

@Controller('users')
export class UsersController {
  constructor( private userService: UsersService) {
  }

  @Post()
  create(@Body() userDto: CreateUserDto){
    return this.userService.createUser(userDto)
  }

  @Get()
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  getAlLUser() {
    return this.userService.getAllUsers()
  }
}
