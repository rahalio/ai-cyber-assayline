/**
 * Postman-collection 1:1 Vitest tests for supervisory (generated)
 *
 * One it() = one API request. Add sample data to vars for e2e runs.
 * Run: pnpm test:e2e or pnpm test:suite:db
 * Requires: API server at baseUrl (default http://localhost:3000)
 */

import { describe, it, expect } from "vitest";

const vars: Record<string, string> = {
  baseUrl: "http://localhost:3000",
  orgId: "test-org",
  accessToken: "",
  addOnId: "",
  cursor: "",
  limit: "",
  packId: "",
  status: "",
};

function sub(s: string): string {
  return s.replace(/\{\{([^}]+)\}\}/g, (_, k) => vars[k.trim()] ?? "");
}

describe("Postman / supervisory (1:1 generated)", () => {

  it("listSupervisoryAddOns", async () => {
    const url = sub("{{baseUrl}}/v1/supervisory-add-ons?cursor={{cursor}}&limit={{limit}}&status={{status}}");
    const res = await fetch(url, {
      method: "GET",
      headers: vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {},
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("recordSupervisoryAddOn", async () => {
    const url = sub("{{baseUrl}}/v1/supervisory-add-ons");
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {}) },
      body: sub("{\n  \"amount\": null,\n  \"attributedCause\": \"\",\n  \"imposedAt\": \"\"\n}"),
    });
    expect(res.status).toBe(201);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("updateRemediationPlan", async () => {
    const url = sub("{{baseUrl}}/v1/supervisory-add-ons/{{addOnId}}/remediation");
    const res = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": "application/json", ...(vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {}) },
      body: sub("{\n  \"actions\": null,\n  \"ownerId\": \"newman_ownerId\",\n  \"targetDate\": \"\",\n  \"targetReduction\": null,\n  \"progressNotes\": \"\"\n}"),
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
    if (j?.data?.id) vars['remediationPlanId'] = j.data.id;
  });

  it("assembleSupervisoryPack", async () => {
    const url = sub("{{baseUrl}}/v1/supervisory-packs");
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...(vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {}) },
      body: sub("{\n  \"scope\": \"full_estate\",\n  \"asOf\": \"\",\n  \"examinationReference\": \"\"\n}"),
    });
    expect(res.status).toBe(201);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });

  it("getSupervisoryPack", async () => {
    const url = sub("{{baseUrl}}/v1/supervisory-packs/{{packId}}");
    const res = await fetch(url, {
      method: "GET",
      headers: vars.accessToken ? { Authorization: `Bearer ${vars.accessToken}` } : {},
    });
    expect(res.status).toBe(200);
    const j = await res.json(); expect(j).toHaveProperty("data");
  });
});
