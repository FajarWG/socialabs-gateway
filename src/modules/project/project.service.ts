import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ProjectResults, ProjectType } from './project.model';
import { CreateProjectInput, ProjectStatusInput } from './project.dto';

import { ConfigService } from '@nestjs/config';

@Injectable()
export class ProjectService {
  constructor(private configService: ConfigService) {}

  async createProject(data: CreateProjectInput): Promise<ProjectType> {
    const response = await axios.post(
      `${this.configService.get<string>('apiService.project')}`,
      {
        ...data,
      },
    );
    return response.data;
  }

  async getAllProjects(
    userId: string,
    page: number,
    limit: number,
  ): Promise<ProjectResults> {
    const response = await axios.get(
      `${this.configService.get<string>('apiService.project')}`,
      {
        params: { userId, page, limit },
      },
    );
    return response.data;
  }

  async getProjectById(id: string): Promise<ProjectType> {
    const response = await axios.get(
      `${this.configService.get<string>('apiService.project')}/${id}`,
    );
    return response.data;
  }

  async updateProjectStatus(
    id: string,
    projectStatus: ProjectStatusInput,
  ): Promise<ProjectType> {
    const response = await axios.patch(
      `${this.configService.get<string>('apiService.project')}/${id}/status`,
      projectStatus,
    );
    return response.data;
  }
}
