import { useState } from "react";
import type { Tire } from "../types/common";

interface Person {
  id: number;
  name: string;
  age: number;
  city: string;
}

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
  ];

  const handleSort = (key: keyof Tire) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

const sortedData = [...data].sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (sortOrder === "asc") {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    } else {
      return bValue < aValue ? -1 : bValue > aValue ? 1 : 0;
    }
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
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
        <tbody>
          {sortedData
            .filter(
              (item) =>
                item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.owner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.model.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.owner.name}</td>
                <td>{item.brand}</td>
                <td>{item.model}</td>
                <td>{item.size.width}</td>
                <td>{item.type}</td>
                <td>{item.tread}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
