import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { RoleService } from "./role.service";
import { CreateRoleDto } from "./dto/role.dto";

@Controller('role')
export class RoleController {

  constructor(private roleService: RoleService) {
  }

  @Post()
  createRole(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto);
  }

  @Get(':/value')
  getByValue(@Param('value') value: string) {
    return this.roleService.getRoleByValue(value)
  }
}
