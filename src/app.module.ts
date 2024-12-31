import { Module } from '@nestjs/common';

import { WzConfigModule } from './config/config.module';
import { WzAccountsManagementModule } from './feature/accounts-management/accounts-management.module';

@Module({
  imports: [WzConfigModule, WzAccountsManagementModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
