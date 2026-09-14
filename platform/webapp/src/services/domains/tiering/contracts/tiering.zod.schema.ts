/**
 * Tiering Domain Contracts
 *
 * Re-exports Zod schemas from @assayline/core for runtime validation.
 * This avoids duplication and ensures alignment with the API contract.
 *
 * Architecture:
 * - Single source of truth: @assayline/core
 * - No code duplication or drift
 * - Runtime validation of API responses
 * - Used in services to validate responses
 *
 * @see @assayline/core/tiering for the source schemas
 */

import { tieringSchemas as coreTieringSchemas } from "@assayline/core/tiering";
import type { z } from "zod";

/**
 * Re-export schemas from core
 * These are the same schemas used by the api-server, ensuring perfect alignment
 */
export const {
  // TODO: Add specific schema exports based on OpenAPI spec
  // ResponseMeta,
  // PageInfo,
  // etc.
} = coreTieringSchemas;

/**
 * Export all schemas as a namespace for convenience
 */
export const tieringSchemas = coreTieringSchemas;
