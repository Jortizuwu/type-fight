// match.service.ts
import { Injectable } from '@nestjs/common';
import { Server, Socket } from 'socket.io';

@Injectable()
export class MatchService {
  private readonly matchRooms: Map<string, string[]> = new Map(); // Mapa de salas

  createMatchRoom(client: Socket): string {
    const roomId = `room_${Date.now()}`;
    client.join(roomId);
    this.matchRooms.set(roomId, [client.id]); // Inicializa la sala con el primer jugador
    return roomId;
  }

  joinMatchRoom(server: Server, roomId: string, client: Socket): void {
    const roomPlayers = this.matchRooms.get(roomId) || [];

    if (roomPlayers.length < 2) {
      client.join(roomId);
      roomPlayers.push(client.id);
      this.matchRooms.set(roomId, roomPlayers);

      // Notifica a los jugadores en la sala sobre la nueva conexión
      server.to(roomId).emit('userJoined', { userId: client.id });

      // Si la sala ahora tiene dos jugadores, puedes iniciar el juego o realizar otras acciones
      if (roomPlayers.length === 2) {
        // Iniciar el juego, enviar instrucciones, etc.
        server.to(roomId).emit('startGame', {
          /* ... */
        });
      }
    } else {
      // La sala ya está llena, puedes manejar este caso según tus necesidades
    }
  }

  getPlayersInRoom(roomId: string): string[] {
    return this.matchRooms.get(roomId) || [];
  }
}
