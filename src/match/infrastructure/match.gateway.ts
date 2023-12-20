import {
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

import { UseGuards, Inject } from '@nestjs/common';
import { WsJwtGuard } from 'src/common/infrastructure/guards/ws/auth.guard';
import { MatchUsesCaseService } from '../application/use-case/match.use-cases';
import { LoggerService } from 'src/common/infrastructure/logger/logger.service';
import { ILoggerServices } from 'src/common/domain/interface/logger/logger.interface';
import { IUseCaseMatchService } from '../domain/interfaces/match.interface';

@WebSocketGateway()
export class MatchGateway implements OnGatewayInit {
  @WebSocketServer() server: Server;

  constructor(
    @Inject(MatchUsesCaseService)
    private readonly matchService: IUseCaseMatchService,
    @Inject(LoggerService)
    private readonly logger: ILoggerServices,
  ) {}

  afterInit(): void {
    // this.logger.log('server', JSON.parse(server));
    this.logger.log(MatchGateway.name, 'WebSocket initialized');
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('createMatch')
  handleCreateMatch(client: Socket): void {
    const matchId = this.matchService.createMatch(client);
    this.server.to(client.id).emit('matchCreated', { matchId });
    this.logger.log(MatchGateway.name, 'createMatch');
  }

  @UseGuards(WsJwtGuard)
  @SubscribeMessage('joinMatch')
  handleJoinMatch(client: Socket, payload: { matchId: string }): void {
    const { matchId } = payload;
    this.matchService.joinMatch(this.server, matchId, client);
    this.logger.log(MatchGateway.name, 'joinMatch');
  }

  // // @UseGuards(WsJwtGuard)
  // // @SubscribeMessage('finishMatch')
  // // handelFinishMatch(client: Socket, payload: { matchId: string }): void {
  // //   const { matchId } = payload;
  // //   const players = this.matchService.getPlayersInRoom(matchId);
  // //   this.server.to(client.id).emit('finishMatch', { players });
  // // }

  // @UseGuards(WsJwtGuard)
  // @SubscribeMessage('getPlayers')
  // handleGetPlayers(client: Socket, payload: { matchId: string }): void {
  //   const { matchId } = payload;
  //   const players = this.matchService.getPlayersInMatch(matchId);
  //   this.server.to(client.id).emit('playersInRoom', { players });
  // }
}
