import { Module } from '@nestjs/common';
import { HttpModule } from 'src/utils/http.module';
import { ChatbotService } from './chatbot.service';
import { ChatbotResolver } from './chatbot.resolver';

@Module({
  imports: [HttpModule],
  providers: [ChatbotService, ChatbotResolver],
})
export class ChatbotModule {}
