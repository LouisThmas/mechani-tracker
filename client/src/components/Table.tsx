import { useState } from "react";
import type { Tire } from "../types/common";
import './Table.css'
import TableBody from "./TableBody";

const TableComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<keyof Tire>("id");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const data: Tire[] = [
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
  ];

  const handleSort = (key: keyof Tire) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  const filterItems = (items: Tire[], searchTerm: string): Tire[] => {
  const lower = searchTerm.toLowerCase();
  return items.filter((item) =>
    item.id.toLowerCase().includes(lower) ||
    item.owner.name.toLowerCase().includes(lower) ||
    item.brand.toLowerCase().includes(lower) ||
    item.model.toLowerCase().includes(lower)
    );
  }

  
  const sortedData = [...data].sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];
    
    if (sortOrder === "asc") {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    } else {
      return bValue < aValue ? -1 : bValue > aValue ? 1 : 0;
    }
  });
  
  const filteredData = filterItems(sortedData, searchTerm);

  return (
    <div className="content">
      <div className="input-box">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="inventory-container">
        <table className="inventory">
          <thead>
            <tr>
              <th onClick={() => handleSort("id")}>
                ID {sortBy === "id" && (sortOrder === "asc" ? "↑" : "↓")}
              </th>
              <th>
                Owner
              </th>
              <th onClick={() => handleSort("brand")}>
                Brand {sortBy === "brand" && (sortOrder === "asc" ? "↑" : "↓")}
              </th>
              <th onClick={() => handleSort("model")}>
                Model {sortBy === "model" && (sortOrder === "asc" ? "↑" : "↓")}
              </th>
              <th>
                Size
              </th>
              <th>
                Type
              </th>
              <th>
                Tread
              </th>
            </tr>
          </thead>
          <TableBody data={filteredData} />
      </table>
      </div>
      <div className="add-button">
        <button>Add a tire</button>
      </div>
    </div>
  );
};

export default TableComponent;
