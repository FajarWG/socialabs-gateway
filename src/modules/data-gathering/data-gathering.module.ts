import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { DataGatheringService } from './data-gathering.service';
import { DataGatheringResolver } from './data-gathering.resolver';

@Module({
  imports: [HttpModule],
  providers: [DataGatheringService, DataGatheringResolver],
})
export class DataGatheringModule {}
