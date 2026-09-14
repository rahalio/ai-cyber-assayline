/**
 * Monitoring Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/monitoring.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type MonitoringBreach = components["schemas"]["MonitoringBreach"];
export type MonitoringBreachCreate = components["schemas"]["MonitoringBreachCreate"];
export type MonitoringObligation = components["schemas"]["MonitoringObligation"];
export type MonitoringObligationCreate = components["schemas"]["MonitoringObligationCreate"];
export type MonitoringObligationListData = components["schemas"]["MonitoringObligationListData"];
export type RevalidationTrigger = components["schemas"]["RevalidationTrigger"];
export type RevalidationTriggerListData = components["schemas"]["RevalidationTriggerListData"];
export type Obligation = operations["listMonitoringObligations"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type AssignMonitoringObligationRequestInput = NonNullable<operations["assignMonitoringObligation"]["requestBody"]>["content"]["application/json"];
export type RecordMonitoringBreachRequestInput = NonNullable<operations["recordMonitoringBreach"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListMonitoringObligationsParams = NonNullable<operations["listMonitoringObligations"]["parameters"]["query"]>;
export type ListRevalidationTriggersParams = NonNullable<operations["listRevalidationTriggers"]["parameters"]["query"]>;


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListMonitoringObligationsResponse = operations["listMonitoringObligations"]["responses"]["200"]["content"]["application/json"];
export type AssignMonitoringObligationResponse = operations["assignMonitoringObligation"]["responses"]["201"]["content"]["application/json"];
export type RecordMonitoringBreachResponse = operations["recordMonitoringBreach"]["responses"]["201"]["content"]["application/json"];
export type ListRevalidationTriggersResponse = operations["listRevalidationTriggers"]["responses"]["200"]["content"]["application/json"];


