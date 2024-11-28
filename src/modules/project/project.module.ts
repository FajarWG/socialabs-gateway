import { Module } from '@nestjs/common';

import { ProjectService } from './project.service';
import { ProjectResolver } from './project.resolver';
import { HttpModule } from 'src/utils/http.module';

@Module({
  imports: [HttpModule],
  providers: [ProjectService, ProjectResolver],
})
export class ProjectModule {}
