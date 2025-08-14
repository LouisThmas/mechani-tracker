import './SideNav.css';
import { Link } from 'react-router-dom';

interface SideNavProps {
  isOpen: boolean;
  onToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SideNav({ isOpen, onToggle }: SideNavProps) {
  const navItems = [
    { title: 'dashboard', icon: '🏠' },
    { title: 'profile', icon: '👤' },
    // { title: 'Settings', icon: '⚙️' },
  ];

  return (
    <div className={`side-bar ${isOpen ? 'open' : 'closed'}`}>
      <div className="side-header">
        {isOpen && <h1>Dashboard</h1>}
        <button
          className="toggle-btn"
          onClick={() => onToggle(!isOpen)}
          aria-label="Toggle sidebar"
        >
          {isOpen ? '←' : '→'}
        </button>
      </div>

        <div className="nav-list">
            {navItems.map((item) => (
                <Link key={item.title} to={item.title} className="nav-item">
                    <span className="icon">{item.icon}</span>
                    {isOpen && <span className="label">{item.title}</span>}
                </Link>
            ))}
        </div>

    </div>
  );
}
