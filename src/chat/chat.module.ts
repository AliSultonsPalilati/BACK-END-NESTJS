import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { EventsGateway } from './chat.gateway';

@Module({
  providers: [EventsGateway, ChatService],
})
export class ChatModule {}
