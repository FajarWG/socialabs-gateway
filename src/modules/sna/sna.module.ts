import { Module } from '@nestjs/common';

import { SNAService } from './sna.service';
import { SNAResolver } from './sna.resolver';
import { HttpModule } from 'src/utils/http.module';

@Module({
  imports: [HttpModule],
  providers: [SNAService, SNAResolver],
})
export class SNAModule {}
