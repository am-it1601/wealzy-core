import { Document } from 'mongoose';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  discriminatorKey: 'type',
  timestamps: true,
  collection: 'wz_accounts',
})
export class Account extends Document {
  @Prop({ required: true })
  accountName: string;

  @Prop()
  description: string;

  @Prop({ required: true, default: 0 })
  runningBalance: number;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
