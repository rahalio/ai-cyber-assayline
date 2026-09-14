/**
 * TieringView — product view shell (codegen stub enriched per WEBAPP.md).
 */

import type { TieringViewProps } from "./types";

export function TieringView({}: TieringViewProps) {
  return (
    <div>
      <h2 style={{ marginTop: 0 }}>Tiering workspace</h2>
      <p className="muted">Score materiality and regulatory impact, stamp the tier, and preview playbook depth.</p>
      <p className="muted" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
        Wired to generated `@/services/domains/tiering` hooks when the API is running.
      </p>
    </div>
  );
}
