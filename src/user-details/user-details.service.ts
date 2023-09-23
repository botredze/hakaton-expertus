import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { UserDetail } from "./entity/user.detail.model";
import { CreateUserDetalsDto, UserData } from "./dto/user.details.dto";
import { User } from "../users/entity/users.model";

@Injectable()
export class UserDetailsService {

  constructor(@InjectModel(UserDetail) private userDetailModel: typeof UserDetail){
  }

  async createUserDetails(dto: CreateUserDetalsDto){
    const user = await this.userDetailModel.findByPk(dto.userid)

    if(user) {
      const userDetails = await this.userDetailModel.create(dto)

      return userDetails
    }
    throw  new HttpException(`User with id: ${dto.userid} not found`, HttpStatus.NOT_FOUND)
  }

  async  getUserData(userId: number): Promise<UserData> {
    try {
      const user = await User.findByPk(userId, { include: [UserDetail] });

      if (!user) {
        throw new Error(`Пользователь с ID ${userId} не найден`);
      }

      const userData: UserData = {
        email: user.email,
        userDetails: {
          firstName: user.userDetail?.firstName || null,
          lastName: user.userDetail?.lastName || null,
          age: user.userDetail?.age || null,
          avatar: user.userDetail?.avatar || null,
          language: user.userDetail?.language || null,
          createdAt: user.userDetail?.createdAt || null,
        }
      };

      return userData;
    } catch (error) {
      throw new Error(`Ошибка при получении данных пользователя: ${error.message}`);
    }
  }

  async updateUserDetails(userId: number, updatedData: Partial<UserDetail>): Promise<void> {
    await this.userDetailModel.update(updatedData, {
      where: { userId }
    });
  }
}


