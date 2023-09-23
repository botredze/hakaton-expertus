
export class CreateUserDto {
   email: string;
   password: string;

}


export  class BanUserDto{
  readonly userId: number;
  readonly banReason: string;
}

export class AddRoleDto {

}