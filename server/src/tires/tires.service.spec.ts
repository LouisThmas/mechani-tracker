import { Test, TestingModule } from '@nestjs/testing';
import { TiresService } from './tires.service';

describe('TiresService', () => {
  let service: TiresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TiresService],
    }).compile();

    service = module.get<TiresService>(TiresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
