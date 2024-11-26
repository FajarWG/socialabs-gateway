import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SNAService } from './sna.service';
import { SNAResolver } from './sna.resolver';

@Module({
  imports: [HttpModule],
  providers: [SNAService, SNAResolver],
})
export class SNAModule {}
