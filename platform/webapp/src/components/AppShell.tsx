import { NavLink, Outlet } from 'react-router-dom';

const NAV = [
  { to: '/', label: 'Capacity', end: true },
  { to: '/inventory', label: 'Inventory' },
  { to: '/tiering', label: 'Tiering' },
  { to: '/submissions', label: 'Submission gate' },
  { to: '/validation', label: 'Validation calendar' },
  { to: '/findings', label: 'Findings' },
  { to: '/conservatism', label: 'Conservatism' },
  { to: '/use', label: 'Permitted use' },
  { to: '/monitoring', label: 'Monitoring' },
  { to: '/quantification', label: 'Quantification' },
  { to: '/supervisory', label: 'Supervisory' },
] as const;

export function AppShell() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">Assayline</div>
          <div className="brand-sub">Validation factory OS</div>
        </div>
        <nav className="nav" aria-label="Primary">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={'end' in item ? item.end : false}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
