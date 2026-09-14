import { DomainPage } from './DomainPage';
import { UseView } from '@/features/use/views/UseView';

export function UsePage() {
  return (
    <DomainPage
      stamp="BR-6 · permitted use"
      title="Permitted use and exceptions"
      purpose="Record intended uses; committee exceptions with expiry and compensating conditions."
      regions={[
        'Permitted-use list',
        'Exception requests',
        'Committee decision',
        'Expiry countdown',
        'Breach log',
      ]}
      actions={['Request exception', 'Authorise', 'Expire', 'Flag misuse']}
    >
      <section className="panel">
        <UseView />
      </section>
    </DomainPage>
  );
}
