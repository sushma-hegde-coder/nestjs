import { Test, TestingModule } from '@nestjs/testing';
import { BotanistService } from './botanist.service';

describe('BotanistService', () => {
  let service: BotanistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BotanistService],
    }).compile();

    service = module.get<BotanistService>(BotanistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
