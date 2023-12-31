import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "../users/dto /user.dto";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {

  constructor(private   authService: AuthService) {
  }


  @Post('/auth/login')
  login(@Body() userDto: CreateUserDto) {
    return this.authService.login(userDto)
  }

  @Post('/auth/registration')
  registration(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto)
  }
}
