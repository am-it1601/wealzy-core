import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ACCOUNT_TYPE } from '../../common/constants';

@Schema({
  validateBeforeSave: true,
})
export class CashAccount {
  @Prop({ required: true })
  openingBalance: number;
  accountType: ACCOUNT_TYPE = ACCOUNT_TYPE.CASH;
  accountName: string;
  runningBalance: number;
  description: string;
}

export const CashAccountSchema = SchemaFactory.createForClass(CashAccount);
