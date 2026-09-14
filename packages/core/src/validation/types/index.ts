/**
 * Validation Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/validation.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type CapacityForecast = components["schemas"]["CapacityForecast"];
export type ValidationEngagement = components["schemas"]["ValidationEngagement"];
export type ValidationEngagementCreate = components["schemas"]["ValidationEngagementCreate"];
export type ValidationEngagementListData = components["schemas"]["ValidationEngagementListData"];
export type ValidationSlot = components["schemas"]["ValidationSlot"];
export type ValidationSlotAllocate = components["schemas"]["ValidationSlotAllocate"];
export type ValidationSlotListData = components["schemas"]["ValidationSlotListData"];
export type ValidationTask = components["schemas"]["ValidationTask"];
export type ValidationTaskCreate = components["schemas"]["ValidationTaskCreate"];
export type ValidationTaskListData = components["schemas"]["ValidationTaskListData"];
export type Slot = operations["listValidationSlots"]["responses"]["200"]["content"]["application/json"]["data"];
export type Engagement = operations["listValidationEngagements"]["responses"]["200"]["content"]["application/json"]["data"];
export type Task = operations["listValidationTasks"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type AllocateValidationSlotRequestInput = NonNullable<operations["allocateValidationSlot"]["requestBody"]>["content"]["application/json"];
export type CreateValidationEngagementRequestInput = NonNullable<operations["createValidationEngagement"]["requestBody"]>["content"]["application/json"];
export type PlaceValidationTaskRequestInput = NonNullable<operations["placeValidationTask"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListValidationSlotsParams = NonNullable<operations["listValidationSlots"]["parameters"]["query"]>;
export type ListValidationEngagementsParams = NonNullable<operations["listValidationEngagements"]["parameters"]["query"]>;
export type ListValidationTasksParams = operations["listValidationTasks"]["parameters"]["path"];
export type PlaceValidationTaskParams = operations["placeValidationTask"]["parameters"]["path"];
export type GetCapacityForecastParams = NonNullable<operations["getCapacityForecast"]["parameters"]["query"]>;


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListValidationSlotsResponse = operations["listValidationSlots"]["responses"]["200"]["content"]["application/json"];
export type AllocateValidationSlotResponse = operations["allocateValidationSlot"]["responses"]["201"]["content"]["application/json"];
export type ListValidationEngagementsResponse = operations["listValidationEngagements"]["responses"]["200"]["content"]["application/json"];
export type CreateValidationEngagementResponse = operations["createValidationEngagement"]["responses"]["201"]["content"]["application/json"];
export type ListValidationTasksResponse = operations["listValidationTasks"]["responses"]["200"]["content"]["application/json"];
export type PlaceValidationTaskResponse = operations["placeValidationTask"]["responses"]["201"]["content"]["application/json"];
export type GetCapacityForecastResponse = operations["getCapacityForecast"]["responses"]["200"]["content"]["application/json"];


