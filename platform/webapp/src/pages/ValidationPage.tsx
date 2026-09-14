import { DomainPage } from './DomainPage';
import { ValidationView } from '@/features/validation/views/ValidationView';

export function ValidationPage() {
  return (
    <DomainPage
      stamp="BR-3 · BR-4 · calendar"
      title="Validation calendar"
      purpose="Allocate slots against validator skills and load; forecast commitments and route placement."
      regions={[
        'Calendar',
        'Skill tags',
        'Load bars',
        'Deferred queue',
        'Cycle-time SLA by tier',
      ]}
      actions={['Assign engagement', 'Rebalance', 'Route placement']}
    >
      <section className="panel">
        <ValidationView />
      </section>
    </DomainPage>
  );
}
