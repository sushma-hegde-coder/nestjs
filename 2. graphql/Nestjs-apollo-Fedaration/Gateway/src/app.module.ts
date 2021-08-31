import { RemoteGraphQLDataSource } from '@apollo/gateway';
import { Module } from '@nestjs/common';
import { GATEWAY_BUILD_SERVICE, GraphQLGatewayModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
class AuthenticatedDataSource extends RemoteGraphQLDataSource {
  async willSendRequest({ request, context }) {
    request.http.headers.set('Authorization', context.jwt);
  }
}
@Module({
  providers: [
    {
      provide: AuthenticatedDataSource,
      useValue: AuthenticatedDataSource,
    },
    {
      provide: GATEWAY_BUILD_SERVICE,
      useFactory: (AuthenticatedDataSource) => {
        return ({ name, url }) => new AuthenticatedDataSource({ url });
      },
      inject: [AuthenticatedDataSource],
    },
  ],
  exports: [GATEWAY_BUILD_SERVICE],
})
class BuildServiceModule {}
@Module({
  imports: [
    GraphQLGatewayModule.forRootAsync({
      useFactory: async () => ({
        gateway: {
          serviceList: [
            { name: 'owner', url: 'http://localhost:5000/graphql' },
            { name: 'user', url: 'http://localhost:5001/graphql' },
            { name: 'pet', url: 'http://localhost:5002/graphql' },
          ],
        },
        subscriptions: false,
        server: {
          context: ({ req }) => ({
            jwt: req.headers.authorization,
          }),

          cors: true,
        },
      }),
      imports: [BuildServiceModule],
      inject: [GATEWAY_BUILD_SERVICE],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
