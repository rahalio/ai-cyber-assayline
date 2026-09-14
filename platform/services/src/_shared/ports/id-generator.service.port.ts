/**
 * IdGeneratorService Port — Assayline domain prefixes.
 */

import type { DomainCode } from '@assayline/core/_shared/helpers';

export interface IdGeneratorService {
  tntId(): string;
  keyId(): string;
  idnId(): string;
  autId(): string;
  invId(): string;
  tirId(): string;
  subId(): string;
  valId(): string;
  fndId(): string;
  cnsId(): string;
  useId(): string;
  monId(): string;
  qntId(): string;
  spvId(): string;
  generateIdForDomain(domainCode: DomainCode): string;
}
