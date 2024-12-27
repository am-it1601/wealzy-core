import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ConfigProvider } from './config-provider/config-provider.service';

@Global()
@Module({
  imports: [ConfigModule.forRoot()],
  providers: [ConfigProvider],
  exports: [ConfigProvider],
})
export class EnvLoaderModule {}
