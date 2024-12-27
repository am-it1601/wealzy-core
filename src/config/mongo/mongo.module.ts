import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ConfigProvider } from '../env-loader/config-provider/config-provider.service';
import { EnvLoaderModule } from '../env-loader/env-loader.module';

@Module({
  imports: [
    EnvLoaderModule,
    MongooseModule.forRootAsync({
      inject: [ConfigProvider],
      useFactory: (configProvider: ConfigProvider) => ({
        uri: configProvider.props.MONGODB_URI,
        dbName: configProvider.props.DB_NAME,
        auth: {
          username: configProvider.props.MONGODB_USER,
          password: configProvider.props.MONGODB_PASSWORD,
        },
        autoIndex: configProvider.get<string>('NODE_ENV') !== 'production',
        connectTimeoutMS: 5000,
      }),
    }),
  ],
})
export class MongoModule {}
