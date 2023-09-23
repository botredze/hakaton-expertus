import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./entity/users.model";
import { AddRoleDto, BanUserDto, CreateUserDto } from "./dto /user.dto";
import { RoleService } from "../role/role.service";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User,
              private roleService: RoleService,
  ) {
  }

  async  createUser (dto: CreateUserDto): Promise<User>{
    try {
      if (dto) {
        const user = await this.userModel.create(dto)
        const role = await this.roleService.getRoleByValue('USER')
        await user.$set('roles', [role.id])
        return user
      }
      throw  new HttpException("Create user error", HttpStatus.BAD_REQUEST)
    }catch (error){
      console.log(error)
    }
  }

  async getUserById(id: number):Promise<User> {
    const user = await  this.userModel.findOne({where: { id}})

    if(!user) {
      throw  new HttpException(`User whit this id: ${id} not found`, HttpStatus.NOT_FOUND)
    }
    return  user
  }

  async getAllUsers(){
    const users = await this.userModel.findAll({include: {all: true}})

    if(users.length == 0 ) {
      throw new HttpException('Users table empty', HttpStatus.NOT_FOUND)
    }
    return users
  }

  async getUserByEmail(email: string) {
    const user = await this.userModel.findOne({where: {email}, include: {all: true}})
    return user
  }

  async ban(dto: BanUserDto) {

  }

  async addRole(dto: AddRoleDto) {

  }
}
