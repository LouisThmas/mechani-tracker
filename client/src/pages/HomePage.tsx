import { useState } from "react";
import SideNav from "../components/SideNav";
import { Outlet } from "react-router-dom";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <SideNav isOpen={isOpen} onToggle={setIsOpen} />
      <main style={{ marginLeft: isOpen ? 200 : 60, padding: 20 }}>
        <Outlet />
      </main>
    </>
  );
}
