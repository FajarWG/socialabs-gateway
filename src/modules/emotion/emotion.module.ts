import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { EmotionService } from './emotion.service';
import { EmotionResolver } from './emotion.resolver';

@Module({
  imports: [HttpModule],
  providers: [EmotionService, EmotionResolver],
})
export class EmotionModule {}
