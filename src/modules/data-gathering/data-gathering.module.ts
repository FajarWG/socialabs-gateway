import { Module } from '@nestjs/common';

import { DataGatheringService } from './data-gathering.service';
import { DataGatheringResolver } from './data-gathering.resolver';
import { HttpModule } from 'src/utils/http.module';

@Module({
  imports: [HttpModule],
  providers: [DataGatheringService, DataGatheringResolver],
})
export class DataGatheringModule {}
