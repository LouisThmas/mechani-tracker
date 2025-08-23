import { Injectable } from '@nestjs/common';
import { Tire } from 'src/types/common';
import { CreateTireDto } from './create-tire.dto';

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

    private generateRandomId(): number {
      return Math.floor(1000000 + Math.random() * 9000000);
    }

    async findAll(): Promise<Tire[]> {
      return this.tires
    }

    async addTire(tire: CreateTireDto): Promise<Tire> {
      let uniqueId: string = '';
      let exists: boolean = true;

      while (exists) {
        uniqueId = this.generateRandomId().toString();
        exists = this.tires.some((tire: Tire) => {tire.id == uniqueId});
      }
      const addedTire: Tire = {...tire, id: uniqueId, events: []};
      this.tires.push(addedTire);
      
      return addedTire;
    }
}
