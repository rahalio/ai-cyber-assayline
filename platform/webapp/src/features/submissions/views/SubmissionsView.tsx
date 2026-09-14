/**
 * SubmissionsView — product view shell (codegen stub enriched per WEBAPP.md).
 */

import type { SubmissionsViewProps } from "./types";

export function SubmissionsView({}: SubmissionsViewProps) {
  return (
    <div>
      <h2 style={{ marginTop: 0 }}>Submission gate workspace</h2>
      <p className="muted">Run completeness checks, attribute returns upstream, and unlock slots only when the standard is met.</p>
      <p className="muted" style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
        Wired to generated `@/services/domains/submissions` hooks when the API is running.
      </p>
    </div>
  );
}
