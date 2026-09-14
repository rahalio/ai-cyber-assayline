import { DomainPage } from './DomainPage';
import { QuantificationView } from '@/features/quantification/views/QuantificationView';

export function QuantificationPage() {
  return (
    <DomainPage
      stamp="BR-8 · quantification"
      title="Quantification and appetite"
      purpose="Per-model and aggregate model risk versus appetite; lump-sum buffers where unquantifiable."
      regions={[
        'Appetite dial',
        'Quantified risk',
        'Buffers',
        'KPIs (performance, open findings)',
      ]}
      actions={['Update quantification', 'Fix buffer', 'Export to CRO pack']}
    >
      <section className="panel">
        <QuantificationView />
      </section>
    </DomainPage>
  );
}
