/**
 * ValidationView — product view shell (codegen stub enriched per WEBAPP.md).
 */

import type { ValidationViewProps } from "./types";

export function ValidationView({}: ValidationViewProps) {
  return (
    <div>
      <h2 style={{ marginTop: 0 }}>Validation calendar workspace</h2>
      <p className="muted">Allocate engagements against skills and load; place onshore or offshore with a recorded sensitivity basis.</p>
      <p className="muted" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
        Wired to generated `@/services/domains/validation` hooks when the API is running.
      </p>
    </div>
  );
}
