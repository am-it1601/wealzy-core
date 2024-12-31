import { Document } from 'mongoose';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { ACCOUNT_TYPE } from '../constants';

@Schema({
  discriminatorKey: 'accountType',
  timestamps: true,
  collection: 'wz_accounts',
  validateBeforeSave: true,
})
export class Account extends Document {
  @Prop({ required: true })
  accountName: string;

  @Prop()
  description: string;

  @Prop({ required: true, default: 0 })
  runningBalance: number;

  @Prop({
    type: String,
    required: true,
    enum: Object.values(ACCOUNT_TYPE),
  })
  accountType: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
