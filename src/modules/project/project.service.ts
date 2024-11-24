import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ProjectResults, ProjectType } from './project.model';
import { CreateProjectInput, ProjectStatusInput } from './project.dto';

@Injectable()
export class ProjectService {
  private readonly projectApiUrl = 'http://localhost:4000/project';

  async createProject(data: CreateProjectInput): Promise<ProjectType> {
    const response = await axios.post(`${this.projectApiUrl}`, {
      ...data,
    });
    return response.data;
  }

  async getAllProjects(
    userId: string,
    page: number,
    limit: number,
  ): Promise<ProjectResults> {
    const response = await axios.get(`${this.projectApiUrl}`, {
      params: { userId, page, limit },
    });
    return response.data;
  }

  async getProjectById(id: string): Promise<ProjectType> {
    const response = await axios.get(`${this.projectApiUrl}/${id}`);
    return response.data;
  }

  async updateProjectStatus(
    id: string,
    projectStatus: ProjectStatusInput,
  ): Promise<ProjectType> {
    const response = await axios.patch(
      `${this.projectApiUrl}/${id}/status`,
      projectStatus,
    );
    return response.data;
  }
}
