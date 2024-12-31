import { Test, TestingModule } from '@nestjs/testing';

import { WzAccountServiceService } from './wz-account.service';

describe('WzAccountServiceService', () => {
  let service: WzAccountServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WzAccountServiceService],
    }).compile();

    service = module.get<WzAccountServiceService>(WzAccountServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
