import { registerAs } from '@nestjs/config';

export default registerAs('apiService', () => ({
  account: process.env.ACCOUNT_URL,
  project: process.env.PROJECT_URL,
  chatbot: process.env.CHATBOT_URL,
  dataGathering: process.env.DATA_GATHERING_URL,
  sentiment: process.env.SENTIMENT_URL,
  emotion: process.env.EMOTION_URL,
  sna: process.env.SNA_URL,
  topic: process.env.TOPIC_MODELLING_URL,
}));
