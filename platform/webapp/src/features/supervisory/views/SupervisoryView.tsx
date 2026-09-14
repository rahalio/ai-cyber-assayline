/**
 * SupervisoryView — product view shell (codegen stub enriched per WEBAPP.md).
 */

import type { SupervisoryViewProps } from "./types";

export function SupervisoryView({}: SupervisoryViewProps) {
  return (
    <div>
      <h2 style={{ marginTop: 0 }}>Supervisory workspace</h2>
      <p className="muted">Manage add-ons, remediation, and live-record exam packs.</p>
      <p className="muted" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
        Wired to generated `@/services/domains/supervisory` hooks when the API is running.
      </p>
    </div>
  );
}
