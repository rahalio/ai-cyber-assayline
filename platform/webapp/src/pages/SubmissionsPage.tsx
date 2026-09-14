import { DomainPage } from './DomainPage';
import { SubmissionsView } from '@/features/submissions/views/SubmissionsView';

export function SubmissionsPage() {
  return (
    <DomainPage
      stamp="BR-2 · submission gate"
      title="Submission gate"
      purpose="Refuse validation slots until the completeness standard is met; attribute returns to the submitting function."
      regions={[
        'Standard by tier',
        'Gap list (data, feeders, monitoring plan, docs, prior findings)',
        'Return reasons',
        'Submitter league of returns',
      ]}
      actions={['Submit', 'Return with attribution', 'Grant slot when complete']}
    >
      <section className="panel">
        <p className="muted" style={{ marginTop: 0 }}>
          Incomplete submissions stay upstream — delay is not recorded as validation slowness.
        </p>
        <SubmissionsView />
      </section>
    </DomainPage>
  );
}
