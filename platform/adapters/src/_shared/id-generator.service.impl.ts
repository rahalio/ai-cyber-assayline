/**
 * ID Generator Service Implementation — Assayline prefixes.
 */

import type { DomainCode } from '@assayline/core/_shared/helpers';
import { DOMAIN_PREFIX_MAP, isValidDomainId } from '@assayline/core';
import { ulid } from 'ulid';
import type { IdGeneratorService } from '@assayline/services/_shared';

export function generateIdWithPrefix(prefix: string): string {
  if (!prefix || prefix.length !== 3 || !/^[a-z]{3}$/.test(prefix)) {
    throw new Error(
      `Invalid domain prefix: "${prefix}". Must be exactly 3 lowercase letters.`
    );
  }
  const id = `${prefix}_${ulid().toLowerCase()}`;
  if (!isValidDomainId(id)) {
    throw new Error(`Generated ID "${id}" failed validation.`);
  }
  return id;
}

export class DefaultIdGeneratorService implements IdGeneratorService {
  tntId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.tenant);
  }
  keyId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.apiKey);
  }
  idnId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.identity);
  }
  autId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.auth);
  }
  invId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.inventory);
  }
  tirId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.tiering);
  }
  subId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.submissions);
  }
  valId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.validation);
  }
  fndId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.findings);
  }
  cnsId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.conservatism);
  }
  useId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.use);
  }
  monId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.monitoring);
  }
  qntId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.quantification);
  }
  spvId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.supervisory);
  }
  generateIdForDomain(domainCode: DomainCode): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP[domainCode]);
  }
}

let idGeneratorService: DefaultIdGeneratorService | null = null;

export function getIdGeneratorService(): DefaultIdGeneratorService {
  if (!idGeneratorService) {
    idGeneratorService = new DefaultIdGeneratorService();
  }
  return idGeneratorService;
}
