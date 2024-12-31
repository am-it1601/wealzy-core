import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ACCOUNT_TYPE, BANK_ACCOUNT_TYPE } from '../../common/constants';

@Schema({
  validateBeforeSave: true,
})
export class BankAccount {
  accountType: ACCOUNT_TYPE;
  accountName: string;
  runningBalance: number;
  description: string;

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
