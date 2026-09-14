/**
 * QuantificationView — product view shell (codegen stub enriched per WEBAPP.md).
 */

import type { QuantificationViewProps } from "./types";

export function QuantificationView({}: QuantificationViewProps) {
  return (
    <div>
      <h2 style={{ marginTop: 0 }}>Quantification workspace</h2>
      <p className="muted">Compare model risk to appetite and maintain lump-sum buffers.</p>
      <p className="muted" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
        Wired to generated `@/services/domains/quantification` hooks when the API is running.
      </p>
    </div>
  );
}
