/**
 * UseView — product view shell (codegen stub enriched per WEBAPP.md).
 */

import type { UseViewProps } from "./types";

export function UseView({}: UseViewProps) {
  return (
    <div>
      <h2 style={{ marginTop: 0 }}>Permitted use workspace</h2>
      <p className="muted">Maintain intended-use records and committee exceptions with expiry.</p>
      <p className="muted" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
        Wired to generated `@/services/domains/use` hooks when the API is running.
      </p>
    </div>
  );
}
