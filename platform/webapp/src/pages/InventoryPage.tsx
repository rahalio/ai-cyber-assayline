import { DomainPage } from './DomainPage';
import { InventoryView } from '@/features/inventory/views/InventoryView';

export function InventoryPage() {
  return (
    <DomainPage
      stamp="BR-1 · inventory boundary"
      title="Inventory boundary"
      purpose="Written, dated model-or-not determinations with criteria, determiner, and appeal."
      regions={[
        'Candidate list',
        'Criteria checklist',
        'Determination record',
        'Appeal status',
        'Inventory count with boundary note',
      ]}
      actions={['Determine', 'Appeal', 'Publish criteria version']}
    >
      <section className="panel">
        <InventoryView />
      </section>
    </DomainPage>
  );
}
