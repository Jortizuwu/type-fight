import {
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { MatchService } from './match.service';
import { Server, Socket } from 'socket.io';
import { WsJwtGuard } from 'src/common/infrastructure/guards/ws/auth.guard';
import { UseGuards } from '@nestjs/common';
import { CreateMatchDto } from './dto/create-match.dto';
@WebSocketGateway()
export class MatchGateway implements OnGatewayInit {
  @WebSocketServer() server: Server;

  constructor(
    private readonly matchService: MatchService,
    // private readonly logger: LoggerService,
  ) {}

  afterInit(server: Server): void {
    console.log('WebSocket initialized');
    // console.debug(server);
    // this.logger.debug('socket', 'init socket');
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('createMatch')
  handleCreateMatch(client: Socket, payload: CreateMatchDto): void {
    const roomId = this.matchService.createMatchRoom(client);
    this.server.to(client.id).emit('matchCreated', { roomId });
    console.log(payload);
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('joinMatch')
  handleJoinMatch(client: Socket, payload: { roomId: string }): void {
    const { roomId } = payload;
    this.matchService.joinMatchRoom(this.server, roomId, client);
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('getPlayers')
  handleGetPlayers(client: Socket, payload: { roomId: string }): void {
    const { roomId } = payload;
    const players = this.matchService.getPlayersInRoom(roomId);
    this.server.to(client.id).emit('playersInRoom', { players });
  }
}
