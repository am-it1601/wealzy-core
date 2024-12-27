import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Account } from '../../common/schema/wz.accounts.schema';

@Schema()
export class CashAccount extends Account {
  @Prop({ required: true })
  openingBalance: number;
}

export const CashAccountSchema = SchemaFactory.createForClass(CashAccount);
