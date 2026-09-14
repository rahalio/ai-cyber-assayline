/**
 * IdentityView — product view shell (codegen stub enriched per WEBAPP.md).
 */

import type { IdentityViewProps } from "./types";

export function IdentityView({}: IdentityViewProps) {
  return (
    <div>
      <h2 style={{ marginTop: 0 }}>Identity workspace</h2>
      <p className="muted">API keys and operator users for the Assayline tenant.</p>
      <p className="muted" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
        Wired to generated `@/services/domains/identity` hooks when the API is running.
      </p>
    </div>
  );
}
