import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Server, Socket } from 'socket.io';

import { IOrmMatchRepository } from 'src/common/domain/interface/match/repository.interface';
import { IUseCaseMatchService } from 'src/match/domain/interfaces/match.interface';
import { IUserModel } from 'src/common/domain/interface/user/model/user-model.interface';
import { IUserRepository } from 'src/user/domain/interfaces/user.interface';
import { JwtTokenService } from 'src/common/infrastructure/jwt/jwt.service';
import { MatchRepository } from 'src/match/domain/repository/match.respository';
import { UserRepository } from 'src/user/domain/repository/user.respository';
import { LoggerService } from 'src/common/infrastructure/logger/logger.service';

@Injectable()
export class MatchUsesCaseService implements IUseCaseMatchService {
  constructor(
    @Inject(MatchRepository)
    private readonly matchRepository: IOrmMatchRepository,
    @Inject(UserRepository)
    private readonly userRepository: IUserRepository,
    private readonly looger: LoggerService,
    private readonly jwtService: JwtTokenService,
  ) {}

  async createMatch(client: Socket): Promise<string> {
    const matchId = uuidv4();
    try {
      const player = await this.decodeTokenAndGetUser(client);
      await this.matchRepository.createMatch({
        id: matchId,
        player,
      });
      client.join(matchId);
      return matchId;
    } catch (error) {
      this.looger.error(MatchUsesCaseService.name, error);
    }
  }

  async joinMatch(
    server: Server,
    matchId: string,
    client: Socket,
  ): Promise<void> {
    try {
      const match = await this.matchRepository.getMatch(matchId, {
        relations: ['players'],
        where: {
          id: matchId,
        },
      });

      const player = await this.decodeTokenAndGetUser(client);

      if (match.players.find((val) => val.uid === player.uid))
        throw new BadRequestException(
          'error: can`t join a game you already belong to',
        );

      if (match.players.length > 2)
        throw new BadRequestException(
          'error: can`t join this game, it is full',
        );

      if (match) {
        await this.matchRepository.addPlayer({
          id: matchId,
          player,
        });
        client.join(matchId);
        server.to(matchId).emit('userJoined', { userId: player.uid });

        // Si la sala ahora tiene dos jugadores, puedes iniciar el juego o realizar otras acciones
        // ...
      }
    } catch (error) {
      this.looger.error(MatchUsesCaseService.name, error);
    }
  }

  async getPlayersInMatch(roomId: string): Promise<string[]> {
    // // Busca los jugadores asociados a la sala
    // const matches = await this.matchRepository.find({
    //   where: { roomId, status: 'pending' },
    // });
    // const players = matches
    //   .map((match) => match.player1Id)
    //   .concat(matches.map((match) => match.player2Id));

    // return players;
    console.log(roomId);
    return [''];
  }

  private async decodeTokenAndGetUser(client: Socket): Promise<IUserModel> {
    const token = client.handshake.headers.authorization.replace('Bearer ', '');
    const user = await this.jwtService.checkToken(token);
    const player = await this.userRepository.getUser(user.uid);
    return player;
  }
}
