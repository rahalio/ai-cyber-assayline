import { DomainPage } from './DomainPage';
import { SupervisoryView } from '@/features/supervisory/views/SupervisoryView';

export function SupervisoryPage() {
  return (
    <DomainPage
      stamp="BR-11 · supervisory"
      title="Supervisory liability and packs"
      purpose="Track add-ons and buffers with remediation; assemble exam packs from the live record."
      regions={[
        'Add-on register',
        'Remediation progress',
        'Pack builder (boundary, tiering, evidence, findings, quantification)',
      ]}
      actions={['Update remediation', 'Generate pack', 'Verify completeness']}
    >
      <section className="panel">
        <SupervisoryView />
      </section>
    </DomainPage>
  );
}
