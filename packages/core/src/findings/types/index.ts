/**
 * Findings Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/findings.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type Finding = components["schemas"]["Finding"];
export type FindingCreate = components["schemas"]["FindingCreate"];
export type FindingListData = components["schemas"]["FindingListData"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type RaiseFindingRequestInput = NonNullable<operations["raiseFinding"]["requestBody"]>["content"]["application/json"];
export type CloseFindingRequestInput = NonNullable<operations["closeFinding"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListFindingsParams = NonNullable<operations["listFindings"]["parameters"]["query"]>;
export type CloseFindingParams = operations["closeFinding"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListFindingsResponse = operations["listFindings"]["responses"]["200"]["content"]["application/json"];
export type RaiseFindingResponse = operations["raiseFinding"]["responses"]["201"]["content"]["application/json"];
export type CloseFindingResponse = operations["closeFinding"]["responses"]["200"]["content"]["application/json"];


