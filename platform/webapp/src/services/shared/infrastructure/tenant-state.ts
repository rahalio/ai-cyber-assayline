const DEMO_ORG = 'tnt_demo';

let effectiveOrgId: string | null = DEMO_ORG;

export function getEffectiveOrgId(): string | null {
  return effectiveOrgId;
}

export function setEffectiveOrgId(orgId: string | null): void {
  effectiveOrgId = orgId;
}
