import { HttpException, Injectable } from '@nestjs/common';

import { ProjectResults, ProjectType } from './project.model';
import { CreateProjectInput, ProjectStatusInput } from './project.dto';

import { AxiosService } from 'src/utils/AxiosService';

@Injectable()
export class ProjectService {
  constructor(private readonly axiosService: AxiosService) {}

  async createProject(data: CreateProjectInput): Promise<ProjectType> {
    try {
      const axiosInstance = this.axiosService.createInstance('project');
      const response = await axiosInstance.post('/project', {
        ...data,
      });
      return response.data.data;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        error.response?.data || 'Service Error',
        error.response?.status || 500,
      );
    }
  }

  async getAllProjects(
    userId: string,
    page: number,
    limit: number,
    name: string,
  ): Promise<ProjectResults> {
    try {
      const axiosInstance = this.axiosService.createInstance('project');
      const response = await axiosInstance.get('/project', {
        params: { userId, page, limit, name },
      });

      return response.data.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Service Error',
        error.response?.status || 500,
      );
    }
  }

  async getProjectById(id: string): Promise<ProjectType> {
    try {
      const axiosInstance = this.axiosService.createInstance('project');
      const response = await axiosInstance.get(`/project/${id}`);

      return response.data.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Service Error',
        error.response?.status || 500,
      );
    }
  }

  async updateProjectStatus(
    id: string,
    projectStatus: ProjectStatusInput,
  ): Promise<ProjectType> {
    try {
      const axiosInstance = this.axiosService.createInstance('project');
      const response = await axiosInstance.patch(
        `/project/${id}/status`,
        projectStatus,
      );

      return response.data.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Service Error',
        error.response?.status || 500,
      );
    }
  }
}
