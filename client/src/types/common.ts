export interface Tire {
  id: string; // unique ID or barcode
  brand: string;
  model: string;
  size: string;
  type: 'summer' | 'winter' | 'all-season';
  condition: 'new' | 'used' | 'worn';
  events: TireEvent[];
}

export interface TireEvent {
  date: string;
  type: 'arrived' | 'mounted' | 'removed' | 'stored' | 'sold' | 'scrapped';
  notes?: string;
  photoUrl?: string;
}