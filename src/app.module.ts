import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ProjectModule } from './modules/project/project.module';
import { UserModule } from './modules/account/user.module';
import { DataGatheringModule } from './modules/data-gathering/data-gathering.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      typePaths: ['./**/*.graphql'],
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
    ProjectModule,
    UserModule,
    DataGatheringModule,
  ],
})
export class AppModule {}
