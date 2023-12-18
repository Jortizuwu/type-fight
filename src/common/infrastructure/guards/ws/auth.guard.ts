import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtTokenService } from '../../jwt/jwt.service';
import { Socket } from 'socket.io';
import { WsException } from '@nestjs/websockets';

@Injectable()
export class WsJwtGuard implements CanActivate {
  constructor(private readonly jwtService: JwtTokenService) {}

  canActivate(context: ExecutionContext): boolean {
    const wsContext = context.switchToWs();
    const client = wsContext.getClient<Socket>();

    const token = client.handshake.headers.authorization;
    if (!token) {
      return false;
    }

    console.log(token);
    try {
      const decoded = this.jwtService.checkToken(token.replace('Bearer ', ''));
      wsContext.getData().user = decoded;
      return true;
    } catch (error) {
      throw new WsException(error.message);
    }
  }
}
