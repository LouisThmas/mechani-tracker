import type { Tire } from "../types/common";

interface props {
  data: Tire[];
}

export default function TableBody({data}: props) {
  if (data.length === 0) {
    return (
      <tbody>
        <tr>
          <td colSpan={7} style={{ textAlign: "center", padding: "12px" }}>
            Nothing found
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.owner.name}</td>
          <td>{item.brand}</td>
          <td>{item.model}</td>
          <td>{item.size.type.toUpperCase()} {item.size.width} / {item.size.ratio} R {item.size.radius}</td>
          <td>{item.type}</td>
          <td>{item.tread}</td>
        </tr>
      ))}
    </tbody>
  );
}
