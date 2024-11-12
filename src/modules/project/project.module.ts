import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ProjectService } from './project.service';
import { ProjectResolver } from './project.resolver';

@Module({
  imports: [HttpModule],
  providers: [ProjectService, ProjectResolver],
})
export class ProjectModule {}
