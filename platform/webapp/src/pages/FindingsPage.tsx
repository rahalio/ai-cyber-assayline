import { DomainPage } from './DomainPage';
import { FindingsView } from '@/features/findings/views/FindingsView';

export function FindingsPage() {
  return (
    <DomainPage
      stamp="BR-9 · findings"
      title="Findings and use constraints"
      purpose="Severity-graded findings automatically restrict permitted use or require an overlay until closed."
      regions={[
        'Finding queue',
        'Severity → constraint mapping',
        'Production registry sync status',
        'Closure evidence',
      ]}
      actions={['Assign severity', 'Close', 'Push constraint']}
    >
      <section className="panel">
        <FindingsView />
      </section>
    </DomainPage>
  );
}
