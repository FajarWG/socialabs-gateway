import { Resolver, Query, Args, Mutation, Int } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { ProjectResults, ProjectType } from './project.model';
import { CreateProjectInput, ProjectStatusInput } from './project.dto';

@Resolver(() => ProjectType)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Query(() => ProjectType)
  async getProject(@Args('id') id: string): Promise<ProjectType> {
    const results = await this.projectService.getProjectById(id);
    return {
      _id: results._id,
      title: results.title,
      description: results.description,
      keyword: results.keyword,
      userId: results.userId,
      topic_category: results.topic_category,
      language: results.language,
      start_date_crawl: results.start_date_crawl,
      end_date_crawl: results.end_date_crawl,
      createdAt: results.createdAt,
      project_status: {
        topic_modelling: results.project_status.topic_modelling,
        sentiment: results.project_status.sentiment,
        emotion: results.project_status.emotion,
        sna: results.project_status.sna,
        _id: results.project_status._id,
      },
    };
  }

  @Query(() => ProjectResults)
  async getAllProjects(
    @Args('userId') userId: string,
    @Args('page', { type: () => Int }) page: number,
    @Args('limit', { type: () => Int }) limit: number,
    @Args('name', { defaultValue: ' ' }) name: string,
  ): Promise<ProjectResults> {
    const results = await this.projectService.getAllProjects(
      userId,
      page,
      limit,
      name,
    );

    return {
      projects: results.projects as ProjectType[],
      total: results.total,
      page: results.page,
      limit: results.limit,
    };
  }

  @Mutation(() => ProjectType)
  async createProject(
    @Args('category') category: string,
    @Args('description') description: string,
    @Args('end_date_crawl') end_date_crawl: string,
    @Args('keyword') keyword: string,
    @Args('language') language: string,
    @Args('start_date_crawl') start_date_crawl: string,
    @Args('title') title: string,
  ): Promise<ProjectType> {
    const data: CreateProjectInput = {
      category,
      description,
      end_date_crawl,
      keyword,
      language,
      start_date_crawl,
      title,
    };

    return this.projectService.createProject(data);
  }

  @Mutation(() => ProjectType)
  async updateProjectStatus(
    @Args('id') id: string,
    @Args('projectStatus') projectStatus: ProjectStatusInput,
  ): Promise<ProjectType> {
    return this.projectService.updateProjectStatus(id, projectStatus);
  }
}
