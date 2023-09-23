import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Role } from "./entity/role.model";
import { CreateRoleDto } from "./dto/role.dto";

@Injectable()
export class RoleService {

  constructor(@InjectModel(Role) private roleModel: typeof Role){}

  async createRole(dto: CreateRoleDto){
    const role = await this.roleModel.create(dto);
    return role;
  }

  async getRoleByValue(value: string) {
    const role = await this.roleModel.findOne({where: {value}})

    return role
  }
}
