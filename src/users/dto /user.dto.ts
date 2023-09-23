
export class CreateUserDto {
  readonly email: string;
  readonly password: string;

}


export  class BanUserDto{
  readonly userId: number;
  readonly banReason: string;
}

export class AddRoleDto {

}