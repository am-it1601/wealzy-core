import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ACCOUNT_TYPE } from '../common/constants';
import { Account, AccountSchema } from '../common/schema/wz.accounts.schema';
import { AccountsController } from './accounts.controller';
import { BankAccountSchema } from './schema/wz.bank-account.schema';
import { CashAccountSchema } from './schema/wz.cash-account.schema';

@Module({
  controllers: [AccountsController],
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Account.name,
        useFactory: () => {
          const schema = AccountSchema;
          schema.discriminator(ACCOUNT_TYPE.CASH, CashAccountSchema);
          schema.discriminator(ACCOUNT_TYPE.BANK, BankAccountSchema);
          //schema.discriminator('LoanAccount', LoanAccountSchema);
          return schema;
        },
      },
    ]),
  ],
})
export class WzAccountsManagementModule {}