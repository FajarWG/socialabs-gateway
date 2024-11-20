import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SNAService } from './sentiment.service';
import { SNAResolver } from './sentiment.resolver';

@Module({
  imports: [HttpModule],
  providers: [SNAService, SNAResolver],
})
export class SNAModule {}
