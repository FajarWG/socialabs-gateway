import { Module } from '@nestjs/common';

import { TopicService } from './topic.service';
import { TopicResolver } from './topic.resolver';
import { HttpModule } from 'src/utils/http.module';

@Module({
  imports: [HttpModule],
  providers: [TopicService, TopicResolver],
})
export class TopicModule {}
