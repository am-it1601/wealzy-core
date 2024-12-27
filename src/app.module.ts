import { Module } from '@nestjs/common';

import { WzConfigModule } from './config/config.module';
import { WzAccountsManagementModule } from './feature/accounts-management/accounts-management.module';
import { AccountsController } from './feature/accounts-management/accounts.controller';

@Module({
  imports: [WzConfigModule, WzAccountsManagementModule],
  controllers: [AccountsController],
  providers: [],
})
export class AppModule {}
