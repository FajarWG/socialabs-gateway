import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { ChatbotService } from './chatbot.service';
import { CrawlingResponse } from './chatbot.model';
import { QueryRequest } from './chatbot.dto';

@Resolver()
export class ChatbotResolver {
  constructor(private readonly chatbotService: ChatbotService) {}

  @Query(() => String)
  async getPrompt(@Args('project_id') project_id: string): Promise<string> {
    const data = {
      project_id,
    };
    await this.chatbotService.getPrompt(data);
    return 'Data fetched successfully';
  }

  @Mutation(() => CrawlingResponse)
  async postQuery(
    @Args('query') query: string,
    @Args('project_id') project_id: string,
  ): Promise<CrawlingResponse> {
    const query_chat: QueryRequest = {
      query,
      project_id,
    };
    const results = await this.chatbotService.query(query_chat);
    return results;
  }
}
