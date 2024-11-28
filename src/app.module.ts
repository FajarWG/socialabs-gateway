import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ProjectModule } from './modules/project/project.module';
import { UserModule } from './modules/account/user.module';
import { DataGatheringModule } from './modules/data-gathering/data-gathering.module';
import { ChatbotModule } from './modules/chatbot/chatbot.module';
import { EmotionModule } from './modules/emotion/emotion.module';
import { SNAModule } from './modules/sna/sna.module';
import apiConfig from './config/api.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [apiConfig],
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      typePaths: ['./**/*.graphql'],
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      context: ({ req }) => {
        const authHeader = req.headers.authorization || '';
        const token = authHeader.startsWith('Bearer ')
          ? authHeader.split(' ')[1]
          : null;

        return { token };
      },
      playground: true,
    }),
    ProjectModule,
    UserModule,
    DataGatheringModule,
    ChatbotModule,
    EmotionModule,
    SNAModule,
  ],
})
export class AppModule {}
