import { Controller, Get } from '@nestjs/common';

@Controller('accounts')
export class AccountsController {
  @Get()
  public getAllAccounts(): Promise<void> {
    return null;
  }
}
