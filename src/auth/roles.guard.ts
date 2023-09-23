import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "./roles.auth.decorator";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor( private jwtService: JwtService,
               private reflector: Reflector
  ) {
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest()

    try {
      const requeredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
      ])

      if(!requeredRoles) {
        return  true;
      }

      const authHeader  = req.headers.authorization;
      const bearer = authHeader.split(' ')[0]
      const token = authHeader.split(' ')[1]


      if(bearer !== 'Bearer' || token) {
        throw  new UnauthorizedException({message: 'Пользователь не авторизован'})
      }

      const user = this.jwtService.verify(token);
      req.user = user.role.some(role => requeredRoles.includes(role.value  ));
      return  true;


    } catch (error) {
      throw new HttpException('Пользователь не авторизован', HttpStatus.FORBIDDEN)
    }
  }
}