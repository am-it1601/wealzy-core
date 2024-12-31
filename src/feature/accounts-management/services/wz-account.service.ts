import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Account } from '../../common/schema/wz.accounts.schema';

import type { Model } from 'mongoose';
import type { CreateAccountDto } from '../dtos/CreateAccountDto';

@Injectable()
export class WzAccountService {
  private readonly log = new Logger(WzAccountService.name);
  constructor(
    @InjectModel(Account.name) private readonly accountModel: Model<Account>,
  ) {}

  async createAccount(createAccountDto: CreateAccountDto) {
    const { type, data } = createAccountDto;
    this.log.log(`Creating a new ${type} account...`);

    const account = new this.accountModel({
      ...data,
      accountType: type,
    });

    return account.save();
  }
}
