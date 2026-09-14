import { Link } from 'react-router-dom';

export function CapacityHomePage() {
  return (
    <div>
      <header className="page-header">
        <span className="stamp">BR-4 · factory home</span>
        <h1>Capacity and factory home</h1>
        <p>
          Cycle time and cost per validated model by tier, with estate growth versus capacity for
          the next four quarters.
        </p>
      </header>

      <div className="grid-2">
        <section className="panel">
          <h2>Capacity commitment</h2>
          <p className="muted">
            Publish cycle time by tier and cost per validated model. Configure skills and load before
            promising SLAs.
          </p>
          <p style={{ marginTop: '1rem' }}>
            <Link className="btn" to="/validation">
              Open calendar
            </Link>
          </p>
        </section>
        <section className="panel">
          <h2>Capital teaser</h2>
          <p className="muted">
            Conservatism aggregate and supervisory add-ons are the capital decision surface for the
            CRO.
          </p>
          <p style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <Link className="btn" to="/conservatism">
              Conservatism register
            </Link>
            <Link className="btn" to="/supervisory">
              Supervisory liability
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}
