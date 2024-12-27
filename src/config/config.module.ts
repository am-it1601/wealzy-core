import { Module } from '@nestjs/common';

import { EnvLoaderModule } from './env-loader/env-loader.module';
import { MongoModule } from './mongo/mongo.module';

@Module({
  imports: [EnvLoaderModule, MongoModule],
})
export class WzConfigModule {}
