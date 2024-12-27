import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Account } from '../../common/schema/wz.accounts.schema';

import type { BANK_ACCOUNT_TYPE } from '../../common/constants';

@Schema()
export class BankAccount extends Account {
  @Prop({ required: true })
  institutionName: string;

  @Prop()
  institutionLogo: string;

  @Prop({ required: true })
  accountNumber: string;

  @Prop({ required: true })
  openingBalance: number;

  @Prop({ required: true, enum: ['SAVING', 'CHECKING'] })
  purpose: BANK_ACCOUNT_TYPE;
}

export const BankAccountSchema = SchemaFactory.createForClass(BankAccount);
