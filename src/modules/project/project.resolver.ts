import { Resolver, Query, Args, Mutation, Int } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { ProjectType, ProjectStatusInput } from './project.model';
import { ProjectDto } from './project.dto';

@Resolver(() => ProjectType)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Query(() => ProjectType, { name: 'project' })
  async getProject(@Args('id') id: string): Promise<ProjectType> {
    return this.projectService.getProjectById(id);
  }

  @Query(() => [ProjectType], { name: 'getAllProjects' })
  async getAllProjects(
    @Args('userId') userId: string,
    @Args('page', { type: () => Int }) page: number,
    @Args('limit', { type: () => Int }) limit: number,
  ): Promise<any> {
    return this.projectService.getAllProjects(userId, page, limit);
  }

  @Mutation(() => ProjectType)
  async createProject(
    @Args('data') data: ProjectDto, // Pastikan ini sesuai dengan input di GraphQL
  ) {
    return this.projectService.createProject(data);
  }

  @Mutation(() => ProjectType)
  async updateProjectStatus(
    @Args('id') id: string,
    @Args('status') status: ProjectStatusInput,
  ): Promise<ProjectType> {
    return this.projectService.updateProjectStatus(id, status);
  }
}
