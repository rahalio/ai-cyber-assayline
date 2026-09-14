/**
 * Supervisory Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/supervisory.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type RemediationPlan = components["schemas"]["RemediationPlan"];
export type SupervisoryAddOn = components["schemas"]["SupervisoryAddOn"];
export type SupervisoryAddOnCreate = components["schemas"]["SupervisoryAddOnCreate"];
export type SupervisoryAddOnListData = components["schemas"]["SupervisoryAddOnListData"];
export type SupervisoryPack = components["schemas"]["SupervisoryPack"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type RecordSupervisoryAddOnRequestInput = NonNullable<operations["recordSupervisoryAddOn"]["requestBody"]>["content"]["application/json"];
export type UpdateRemediationPlanRequestInput = NonNullable<operations["updateRemediationPlan"]["requestBody"]>["content"]["application/json"];
export type UpdateRemediationPlanRequest = UpdateRemediationPlanRequestInput;
export type AssembleSupervisoryPackRequestInput = NonNullable<operations["assembleSupervisoryPack"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListSupervisoryAddOnsParams = NonNullable<operations["listSupervisoryAddOns"]["parameters"]["query"]>;
export type UpdateRemediationPlanParams = operations["updateRemediationPlan"]["parameters"]["path"];
export type GetSupervisoryPackParams = operations["getSupervisoryPack"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListSupervisoryAddOnsResponse = operations["listSupervisoryAddOns"]["responses"]["200"]["content"]["application/json"];
export type RecordSupervisoryAddOnResponse = operations["recordSupervisoryAddOn"]["responses"]["201"]["content"]["application/json"];
export type UpdateRemediationPlanResponse = operations["updateRemediationPlan"]["responses"]["200"]["content"]["application/json"];
export type AssembleSupervisoryPackResponse = operations["assembleSupervisoryPack"]["responses"]["201"]["content"]["application/json"];
export type GetSupervisoryPackResponse = operations["getSupervisoryPack"]["responses"]["200"]["content"]["application/json"];


