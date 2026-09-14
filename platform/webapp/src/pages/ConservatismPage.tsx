import { DomainPage } from './DomainPage';
import { ConservatismView } from '@/features/conservatism/views/ConservatismView';

export function ConservatismPage() {
  return (
    <DomainPage
      stamp="BR-5 · capital register"
      title="Conservatism overlay register"
      purpose="Explicit overlays with location, magnitude, rationale, approver, and review date — estate aggregate for capital decisions."
      regions={[
        'Per-model overlays',
        'Aggregate priced conservatism',
        'Review-due list',
        'Remove / reduce with audit',
      ]}
      actions={['Declare overlay', 'Approve', 'Schedule review', 'Propose release']}
    >
      <section className="panel">
        <ConservatismView />
      </section>
    </DomainPage>
  );
}
