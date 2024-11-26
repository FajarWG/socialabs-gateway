import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class VisualizeEmotionResponse {
  @Field(() => [InsideEmotionVisualize])
  emotion: InsideEmotionVisualize[] | [];

  @Field()
  emotion_percentage: string;

  @Field()
  emotion_percentage_by_topic: string;

  @Field()
  total_data: number;
}

@ObjectType()
export class EmotionProbability {
  @Field()
  Anger: number;

  @Field()
  Fear: number;

  @Field()
  Joy: number;

  @Field()
  Love: number;

  @Field()
  Neutral: number;

  @Field()
  Sad: number;
}

@ObjectType()
export class InsideEmotionVisualize {
  @Field()
  _id: string;

  @Field()
  conversation_id_str: string;

  @Field()
  full_text: string;

  @Field()
  id_str: string;

  @Field()
  in_reply_to_screen_name: string;

  @Field()
  predicted_emotions_bilstm: string;

  @Field()
  predicted_emotions_bilstm_probability: EmotionProbability;

  @Field()
  predicted_emotions_cnn: string;

  @Field()
  predicted_emotions_cnn_probability: EmotionProbability;

  @Field()
  processed_text: string;

  @Field()
  projectId: string;

  @Field()
  topic: string;

  @Field()
  tweet_url: string;
}

@ObjectType()
export class ClassifyEmotionResponse {
  @Field()
  success: boolean;

  @Field()
  total_data: number;

  @Field()
  data: string;
}

@ObjectType()
export class EmotionByIdResponse {
  @Field(() => [])
  data: [];

  @Field()
  total_data: number;
}
