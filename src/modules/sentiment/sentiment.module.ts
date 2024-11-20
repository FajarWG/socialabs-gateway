import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SentimentService } from './sentiment.service';
import { SentimentResolver } from './sentiment.resolver';

@Module({
  imports: [HttpModule],
  providers: [SentimentService, SentimentResolver],
})
export class EmotionModule {}
