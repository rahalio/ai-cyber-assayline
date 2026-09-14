import { DomainPage } from './DomainPage';
import { TieringView } from '@/features/tiering/views/TieringView';

export function TieringPage() {
  return (
    <DomainPage
      stamp="BR-3 · tiering"
      title="Tiering board"
      purpose="Set tier from materiality, loss, uncertainty, regulatory impact, and intended use; select playbook depth."
      regions={[
        'Criteria scores',
        'Tier stamp',
        'Playbook preview (replication / challenger)',
        'History of re-tiers',
      ]}
      actions={['Assign tier', 'Challenge', 'Lock for engagement']}
    >
      <section className="panel">
        <TieringView />
      </section>
    </DomainPage>
  );
}
