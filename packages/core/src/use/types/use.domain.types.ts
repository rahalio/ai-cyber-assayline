/**
 * Use Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/use.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type PermittedUse = components["schemas"]["PermittedUse"];
export type UseException = components["schemas"]["UseException"];
export type UseExceptionCreate = components["schemas"]["UseExceptionCreate"];
export type UseExceptionListData = components["schemas"]["UseExceptionListData"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type SetPermittedUseRequestInput = NonNullable<operations["setPermittedUse"]["requestBody"]>["content"]["application/json"];
export type RequestUseExceptionRequestInput = NonNullable<operations["requestUseException"]["requestBody"]>["content"]["application/json"];
export type AuthoriseUseExceptionRequestInput = NonNullable<operations["authoriseUseException"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type GetPermittedUseParams = operations["getPermittedUse"]["parameters"]["path"];
export type SetPermittedUseParams = operations["setPermittedUse"]["parameters"]["path"];
export type ListUseExceptionsParams = NonNullable<operations["listUseExceptions"]["parameters"]["query"]>;
export type AuthoriseUseExceptionParams = operations["authoriseUseException"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type GetPermittedUseResponse = operations["getPermittedUse"]["responses"]["200"]["content"]["application/json"];
export type SetPermittedUseResponse = operations["setPermittedUse"]["responses"]["200"]["content"]["application/json"];
export type ListUseExceptionsResponse = operations["listUseExceptions"]["responses"]["200"]["content"]["application/json"];
export type RequestUseExceptionResponse = operations["requestUseException"]["responses"]["201"]["content"]["application/json"];
export type AuthoriseUseExceptionResponse = operations["authoriseUseException"]["responses"]["200"]["content"]["application/json"];


