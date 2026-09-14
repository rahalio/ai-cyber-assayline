/**
 * ConservatismView — product view shell (codegen stub enriched per WEBAPP.md).
 */

import type { ConservatismViewProps } from "./types";

export function ConservatismView({}: ConservatismViewProps) {
  return (
    <div>
      <h2 style={{ marginTop: 0 }}>Conservatism register workspace</h2>
      <p className="muted">Declare priced overlays, track review dates, and roll up estate aggregate conservatism.</p>
      <p className="muted" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
        Wired to generated `@/services/domains/conservatism` hooks when the API is running.
      </p>
    </div>
  );
}
