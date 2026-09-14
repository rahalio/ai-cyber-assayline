import type { ReactNode } from 'react';

type DomainPageProps = {
  stamp: string;
  title: string;
  purpose: string;
  regions: string[];
  actions: string[];
  children?: ReactNode;
};

export function DomainPage({ stamp, title, purpose, regions, actions, children }: DomainPageProps) {
  return (
    <div>
      <header className="page-header">
        <span className="stamp">{stamp}</span>
        <h1>{title}</h1>
        <p>{purpose}</p>
      </header>
      <div className="grid-2">
        <section className="panel">
          <h2>Layout regions</h2>
          <ul className="list">
            {regions.map((r) => (
              <li key={r}>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="panel">
          <h2>Primary actions</h2>
          <ul className="list">
            {actions.map((a) => (
              <li key={a}>
                <span>{a}</span>
                <button type="button" className="btn">
                  Open
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
      {children ? <div style={{ marginTop: '1rem' }}>{children}</div> : null}
    </div>
  );
}
