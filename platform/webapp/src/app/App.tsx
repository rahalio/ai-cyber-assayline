import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppShell } from '@/components/AppShell';
import { CapacityHomePage } from '@/pages/CapacityHomePage';
import { InventoryPage } from '@/pages/InventoryPage';
import { TieringPage } from '@/pages/TieringPage';
import { SubmissionsPage } from '@/pages/SubmissionsPage';
import { ValidationPage } from '@/pages/ValidationPage';
import { FindingsPage } from '@/pages/FindingsPage';
import { ConservatismPage } from '@/pages/ConservatismPage';
import { UsePage } from '@/pages/UsePage';
import { MonitoringPage } from '@/pages/MonitoringPage';
import { QuantificationPage } from '@/pages/QuantificationPage';
import { SupervisoryPage } from '@/pages/SupervisoryPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppShell />}>
            <Route index element={<CapacityHomePage />} />
            <Route path="inventory" element={<InventoryPage />} />
            <Route path="tiering" element={<TieringPage />} />
            <Route path="submissions" element={<SubmissionsPage />} />
            <Route path="validation" element={<ValidationPage />} />
            <Route path="findings" element={<FindingsPage />} />
            <Route path="conservatism" element={<ConservatismPage />} />
            <Route path="use" element={<UsePage />} />
            <Route path="monitoring" element={<MonitoringPage />} />
            <Route path="quantification" element={<QuantificationPage />} />
            <Route path="supervisory" element={<SupervisoryPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
