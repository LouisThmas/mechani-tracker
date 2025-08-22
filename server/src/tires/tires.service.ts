import { Injectable } from '@nestjs/common';
import { Tire } from 'src/types/common';

@Injectable()
export class TiresService {
    private tires: Tire[] = [
    {
      id: '1',
      owner: {
        name: 'jean guy'
      },
      brand: 'Michelin',
      model: 'Defender',
      size: {
        type: 'p',
        width: 225,
        ratio: 75,
        radius: 16
      },
      type: 'summer',
      tread: 8,
      rim: true,
      events: [],
    },
        {
      id: '1',
      owner: {
        name: 'jean guy'
      },
      brand: 'Michelin',
      model: 'Defender',
      size: {
        type: 'p',
        width: 225,
        ratio: 75,
        radius: 16
      },
      type: 'summer',
      tread: 8,
      rim: true,
      events: [],
    },
        {
      id: '1',
      owner: {
        name: 'jean guy'
      },
      brand: 'Michelin',
      model: 'Defender',
      size: {
        type: 'p',
        width: 225,
        ratio: 75,
        radius: 16
      },
      type: 'summer',
      tread: 8,
      rim: true,
      events: [],
    },
        {
      id: '1',
      owner: {
        name: 'jean guy'
      },
      brand: 'Michelin',
      model: 'Defender',
      size: {
        type: 'p',
        width: 225,
        ratio: 75,
        radius: 16
      },
      type: 'summer',
      tread: 8,
      rim: true,
      events: [],
    },
        {
      id: '1',
      owner: {
        name: 'jean guy'
      },
      brand: 'Michelin',
      model: 'Defender',
      size: {
        type: 'p',
        width: 225,
        ratio: 75,
        radius: 16
      },
      type: 'summer',
      tread: 8,
      rim: true,
      events: [],
    },
        {
      id: '1',
      owner: {
        name: 'jean guy'
      },
      brand: 'Michelin',
      model: 'Defender',
      size: {
        type: 'p',
        width: 225,
        ratio: 75,
        radius: 16
      },
      type: 'summer',
      tread: 8,
      rim: true,
      events: [],
    },
        {
      id: '1',
      owner: {
        name: 'jean guy'
      },
      brand: 'Michelin',
      model: 'Defender',
      size: {
        type: 'p',
        width: 225,
        ratio: 75,
        radius: 16
      },
      type: 'summer',
      tread: 8,
      rim: true,
      events: [],
    },
        {
      id: '1',
      owner: {
        name: 'jean guy'
      },
      brand: 'Michelin',
      model: 'Defender',
      size: {
        type: 'p',
        width: 225,
        ratio: 75,
        radius: 16
      },
      type: 'summer',
      tread: 8,
      rim: true,
      events: [],
    },
        {
      id: '1',
      owner: {
        name: 'jean guy'
      },
      brand: 'Michelin',
      model: 'Defender',
      size: {
        type: 'p',
        width: 225,
        ratio: 75,
        radius: 16
      },
      type: 'summer',
      tread: 8,
      rim: true,
      events: [],
    },
    ]

    async findAll(): Promise<Tire[]> {
        return this.tires
    }
}
