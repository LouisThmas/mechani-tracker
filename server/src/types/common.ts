export interface Client {
  name: string,
  phone?: number,
  email?: string,
}

export interface Tire {
  id: string; // unique ID or barcode
  owner: Client;
  brand: string;
  model: string;
  size: TireSize;
  type: 'summer' | 'winter' | 'all-season';
  tread: number;
  rim: boolean;
  events: TireEvent[];
}

export interface TireSize {
  type: 'p' | 'lt' | 'c' | 'xl' | 't';
  width: number;
  ratio: number;
  radius: number;
}

export interface TireEvent {
  date: string;
  type: 'arrived' | 'mounted' | 'removed' | 'stored' | 'sold' | 'scrapped';
  notes?: string;
  photoUrl?: string;
}