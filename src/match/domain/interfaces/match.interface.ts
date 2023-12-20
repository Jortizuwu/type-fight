import { Server, Socket } from 'socket.io';

export interface IUseCaseMatchService {
  createMatch(client: Socket): Promise<string>;
  joinMatch(server: Server, matchId: string, client: Socket): void;
  // getPlayersInMatch(matchId: string): string[];
}
