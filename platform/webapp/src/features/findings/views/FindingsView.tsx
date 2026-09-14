/**
 * FindingsView — product view shell (codegen stub enriched per WEBAPP.md).
 */

import type { FindingsViewProps } from "./types";

export function FindingsView({}: FindingsViewProps) {
  return (
    <div>
      <h2 style={{ marginTop: 0 }}>Findings workspace</h2>
      <p className="muted">Raise severity-graded findings that constrain use until closed.</p>
      <p className="muted" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
        Wired to generated `@/services/domains/findings` hooks when the API is running.
      </p>
    </div>
  );
}
