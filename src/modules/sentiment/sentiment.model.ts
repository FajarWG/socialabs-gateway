import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class SentimentPercentage {
  @Field()
  positive: number;

  @Field()
  negative: number;
}

@ObjectType()
export class SentimentPercentageByTopic {
  @Field()
  positive: number;

  @Field()
  negative: number;
}

@ObjectType()
export class VisualizeSentimentResponse {
  @Field(() => [InsideSentimentVisualize])
  sentiment: InsideSentimentVisualize[] | [];

  @Field()
  sentiment_percentage: SentimentPercentage;

  @Field()
  sentiment_percentage_by_topic: SentimentPercentageByTopic;

  @Field()
  total_data: number;
}

@ObjectType()
export class InsideSentimentVisualize {
  @Field()
  conversation_id_str: string;

  @Field()
  full_text: string;

  @Field()
  id_str: string;

  @Field()
  in_reply_to_screen_name: string;

  @Field()
  predicted_sentiment_cnn: string;

  @Field()
  predicted_sentiment_cnn_lstm: string;

  @Field()
  predicted_sentiment_cnn_lstm_probability: string;

  @Field()
  predicted_sentiment_cnn_probability: string;

  @Field()
  probability: string;

  @Field()
  processed_text: string;

  @Field()
  projectId: string;

  @Field()
  topic: string;

  @Field()
  tweet_url: string;

  @Field()
  user_id_str: string;

  @Field()
  username: string;

  @Field()
  _id: string;
}

@ObjectType()
export class ClassifySentimentResponse {
  @Field()
  success: boolean;

  @Field()
  total_data: number;

  @Field()
  data: string;
}

@ObjectType()
export class SentimentByIdResponse {
  @Field(() => [])
  data: [];

  @Field()
  total_data: number;
}
