import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { UserDetailsService } from "./user-details.service";
import { CreateUserDetalsDto } from "./dto/user.details.dto";
import { UserDetail } from "./entity/user.detail.model";

@Controller('user-details')
export class UserDetailsController {

  constructor(private  UserDetailsService: UserDetailsService) {
  }

  @Post('/user/userdetails')
  createUserDetails (@Body() dto: CreateUserDetalsDto) {
    return this.UserDetailsService.createUserDetails(dto)
  }

  @Get('user/getUserData')
  getUserData(@Param('id') userId: number){
    return this.UserDetailsService.getUserData(userId)
  }

  @Put('/user/updateUserData:userId')
  async updateUserDetails(@Param('userId') userId: number, @Body() updatedData: Partial<UserDetail>) {
    try {
      await this.UserDetailsService.updateUserDetails(userId, updatedData);
      return { message: 'Данные успешно обновлены' };
    } catch (error) {
      return { error: `Ошибка при обновлении данных пользователя: ${error.message}` };
    }
  }
}
