import { Module } from '@nestjs/common';

import { SentimentService } from './sentiment.service';
import { SentimentResolver } from './sentiment.resolver';
import { HttpModule } from 'src/utils/http.module';

@Module({
  imports: [HttpModule],
  providers: [SentimentService, SentimentResolver],
})
export class SentimentModule {}
