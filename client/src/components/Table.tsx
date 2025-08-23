import { useEffect, useState } from "react";
import type { Tire } from "../types/common";
import './Table.css'
import TableBody from "./TableBody";
import { filterItems } from "../functions";

const TableComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<keyof Tire>("id");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/tires');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const result = await response.json();
          setData(result);
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          }
        } finally {
          setLoading(false);
        }
      };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
  
  const filteredData = filterItems(sortedData, searchTerm);

  return (
    <>
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
    </>
  );
};

export default TableComponent;
