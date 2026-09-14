/**
 * InventoryView — product view shell (codegen stub enriched per WEBAPP.md).
 */

import type { InventoryViewProps } from "./types";

export function InventoryView({}: InventoryViewProps) {
  return (
    <div>
      <h2 style={{ marginTop: 0 }}>Inventory boundary workspace</h2>
      <p className="muted">List artefacts pending determination, record model-or-not outcomes, and keep the estate boundary auditable.</p>
      <p className="muted" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
        Wired to generated `@/services/domains/inventory` hooks when the API is running.
      </p>
    </div>
  );
}
