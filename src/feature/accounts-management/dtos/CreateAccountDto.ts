import { Type } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

import { ACCOUNT_TYPE, BANK_ACCOUNT_TYPE } from '../../common/constants';

export class CreateAccountDto {
  @IsEnum(Object.values(ACCOUNT_TYPE), {
    message: "Type must be either 'CASH' or 'BANK'.",
  })
  @IsNotEmpty()
  type: ACCOUNT_TYPE;

  @ValidateNested()
  @Type((object) => {
    if (!object.object) return Object;
    switch (object.object.type) {
      case 'CASH':
        return CashAccountDataDto;
      case 'BANK':
        return BankAccountDataDto;
      default:
        return Object; // Prevent errors if type is not matched
    }
  })
  data: CashAccountDataDto | BankAccountDataDto;
}

export class CashAccountDataDto {
  @IsNotEmpty()
  accountName: string;

  description?: string;

  @IsNumber()
  @IsNotEmpty()
  openingBalance: number;
}

class BankAccountDataDto {
  @IsNotEmpty()
  accountName: string;

  description?: string;

  @IsNotEmpty()
  institutionName: string;

  @IsOptional()
  institutionLogo?: string;

  @IsNotEmpty()
  @IsString()
  accountNumber: string;

  @IsNumber()
  @IsNotEmpty()
  openingBalance: number;

  @IsEnum(Object.values(BANK_ACCOUNT_TYPE))
  purpose: BANK_ACCOUNT_TYPE;
}
