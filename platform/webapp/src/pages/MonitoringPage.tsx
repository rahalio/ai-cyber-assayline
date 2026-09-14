import { DomainPage } from './DomainPage';
import { MonitoringView } from '@/features/monitoring/views/MonitoringView';

export function MonitoringPage() {
  return (
    <DomainPage
      stamp="BR-10 · monitoring"
      title="Monitoring and revalidation"
      purpose="Owner and developer obligations, thresholds, breach and change-of-use triggers."
      regions={[
        'Obligation matrix',
        'Threshold status',
        'Breach events',
        'Revalidation intake to gate',
      ]}
      actions={['Acknowledge breach', 'Trigger revalidation', 'Update thresholds']}
    >
      <section className="panel">
        <MonitoringView />
      </section>
    </DomainPage>
  );
}
