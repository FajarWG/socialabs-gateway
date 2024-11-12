import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { DataGatheringService } from './data-gathering.service';
import { CrawlingResponse } from './data-gathering.model';
import { CrawlingRequest } from './data-gathering.dto';

@Resolver()
export class DataGatheringResolver {
  constructor(private readonly dataGatheringService: DataGatheringService) {}

  @Query(() => String)
  async getByKeyword(
    @Args('keyword') keyword: string,
    @Args('start_date') start_date: string,
    @Args('end_date') end_date: string,
  ): Promise<string> {
    const data = {
      keyword,
      start_date,
      end_date,
    };
    await this.dataGatheringService.getByKeyword(data);
    return 'Data fetched successfully';
  }

  @Mutation(() => CrawlingResponse)
  async crawling(
    @Args('access_token') access_token: string,
    @Args('keywords') keywords: string,
    @Args('total_tweet') total_tweet: number,
    @Args('projectId') projectId: string,
  ): Promise<CrawlingResponse> {
    const crawling: CrawlingRequest = {
      access_token,
      keywords,
      total_tweet,
      projectId,
    };
    const results = await this.dataGatheringService.crawling(crawling);
    return {
      data: results.data,
      filename: results.filename,
    };
  }
}
