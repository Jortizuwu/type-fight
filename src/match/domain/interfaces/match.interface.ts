import { Server, Socket } from 'socket.io';
export interface IUseCaseMatchService {
  joinMatch(server: Server, matchId: string, client: Socket): Promise<void>;
  createMatch(client: Socket): Promise<string>;
  getPlayersInMatch(matchId: string): Promise<string[]>;
  finishMatch(matchId: string, client: Socket): Promise<void>;
}
