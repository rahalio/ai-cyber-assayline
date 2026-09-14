/**
 * Tiering Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/tiering.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type TierAssessment = components["schemas"]["TierAssessment"];
export type TierAssessmentCreate = components["schemas"]["TierAssessmentCreate"];
export type TierAssessmentListData = components["schemas"]["TierAssessmentListData"];
export type TierCriteria = components["schemas"]["TierCriteria"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type AssessModelTierRequestInput = NonNullable<operations["assessModelTier"]["requestBody"]>["content"]["application/json"];
export type UpdateTierCriteriaRequestInput = NonNullable<operations["updateTierCriteria"]["requestBody"]>["content"]["application/json"];
export type UpdateTierCriteriaRequest = UpdateTierCriteriaRequestInput;


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListTierAssessmentsParams = operations["listTierAssessments"]["parameters"]["path"];
export type AssessModelTierParams = operations["assessModelTier"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListTierAssessmentsResponse = operations["listTierAssessments"]["responses"]["200"]["content"]["application/json"];
export type AssessModelTierResponse = operations["assessModelTier"]["responses"]["201"]["content"]["application/json"];
export type GetTierCriteriaResponse = operations["getTierCriteria"]["responses"]["200"]["content"]["application/json"];
export type UpdateTierCriteriaResponse = operations["updateTierCriteria"]["responses"]["200"]["content"]["application/json"];


