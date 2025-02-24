import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { Server } from 'http';
import { Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  path: '/socket'
})


// export class ChatGateway {
//   constructor(private readonly chatService: ChatService) {}

//   @WebSocketServer()
//   Server: Server;

//   @SubscribeMessage('chat-send')
  
//   async handleConnection(socket: Socket) {
//     console.log('connected');
//   }
//   async handleDisconnect(socket: Socket) {
//     console.log('disconnected');
//   }

//   @SubscribeMessage('chat-send')
//   async sendMessage(socket: Socket, data: any) {
//     const { message } = data;
//     this.Server.emit('chat-receive', message);
//   }

// }

export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private users: Map<string, string> = new Map();

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    const username = this.users.get(client.id);
    if (username) {
      this.server.emit('user-disconnected', username);
      this.users.delete(client.id);
    }
    console.log(`Client disconnected: ${client.id}`);
  }

  @SubscribeMessage('user-connected')
  handleUserConnect(client: Socket, username: string) {
    this.users.set(client.id, username);
    this.server.emit('user-connected', username);
  }

  @SubscribeMessage('chat-send')
  handleMessage(client: Socket, data: any): void {
    this.server.emit('chat-receive', {
      message: data.message,
      username: data.username,
      timestamp: data.timestamp
    });

  }}
