import { useState } from "react";
import SideNav from "../components/SideNav";
import { Outlet } from "react-router-dom";
import './MainPage.css'

export default function MainPage() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="layout">
      <SideNav isOpen={isOpen} onToggle={setIsOpen} />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

/*return (
    <>
      <SideNav isOpen={isOpen} onToggle={setIsOpen} />
      <main style={{ marginLeft: isOpen ? 200 : 60, padding: 20 }}>
        <Outlet />
      </main>
    </>
  );*/