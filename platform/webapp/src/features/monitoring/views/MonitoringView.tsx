/**
 * MonitoringView — product view shell (codegen stub enriched per WEBAPP.md).
 */

import type { MonitoringViewProps } from "./types";

export function MonitoringView({}: MonitoringViewProps) {
  return (
    <div>
      <h2 style={{ marginTop: 0 }}>Monitoring workspace</h2>
      <p className="muted">Track owner obligations, breaches, and revalidation triggers.</p>
      <p className="muted" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
        Wired to generated `@/services/domains/monitoring` hooks when the API is running.
      </p>
    </div>
  );
}
