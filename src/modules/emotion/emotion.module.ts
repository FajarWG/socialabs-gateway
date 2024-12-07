import { Module } from '@nestjs/common';

import { EmotionService } from './emotion.service';
import { EmotionResolver } from './emotion.resolver';
import { HttpModule } from 'src/utils/http.module';

@Module({
  imports: [HttpModule],
  providers: [EmotionService, EmotionResolver],
})
export class EmotionModule {}
