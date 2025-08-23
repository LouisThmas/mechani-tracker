import { Client, TireSize } from "src/types/common";

export class CreateTireDto {
  owner: Client;
  brand: string;
  model: string;
  size: TireSize;
  type: 'summer' | 'winter' | 'all-season';
  tread: number;
  rim: boolean;
}