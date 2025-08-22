import type { Tire } from "./types/common";

export function filterItems(items: Tire[], searchTerm: string): Tire[] {
    const lower = searchTerm.toLowerCase();
    return items.filter((item) =>
      item.id.toLowerCase().includes(lower) ||
      item.owner.name.toLowerCase().includes(lower) ||
      item.brand.toLowerCase().includes(lower) ||
      item.model.toLowerCase().includes(lower)
      );
  }