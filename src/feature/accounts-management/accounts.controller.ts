import { Body, Controller, Inject, Post } from '@nestjs/common';

import { CreateAccountDto } from './dtos/CreateAccountDto';

import type { WzAccountService } from './services/wz-account.service';

@Controller('account')
export class AccountsController {
  constructor(
    @Inject('WzAccountService')
    private readonly _accountService: WzAccountService,
  ) {}
  @Post()
  async createAccount(@Body() createAccountDto: any) {
    console.log('createAccountDto', JSON.stringify(createAccountDto));
    return this._accountService.createAccount(createAccountDto);
  }
}
