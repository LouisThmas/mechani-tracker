import { Test, TestingModule } from '@nestjs/testing';
import { TiresController } from './tires.controller';

describe('TiresController', () => {
  let controller: TiresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TiresController],
    }).compile();

    controller = module.get<TiresController>(TiresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
