/**
 * Monitoring Domain Facade
 *
 * High-level API for monitoring domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { monitoringService } from "./monitoring.service";
// TODO: Import types
// import type { ... } from "./monitoring.api-types";

/**
 * Monitoring Facade
 *
 * High-level API for monitoring operations.
 * Components should use this facade instead of services directly.
 */
export const monitoringFacade = {
  /**
   * List Monitoring Obligations
   */
  async getObligation(...args: Parameters<typeof monitoringService.getObligation>): Promise<any> {
    return monitoringService.getObligation(...args);
  }

  /**
   * Assign Monitoring Obligation
   */
  async getObligation(...args: Parameters<typeof monitoringService.getObligation>): Promise<any> {
    return monitoringService.getObligation(...args);
  }

  /**
   * Record Monitoring Breach
   */
  async getBreach(...args: Parameters<typeof monitoringService.getBreach>): Promise<any> {
    return monitoringService.getBreach(...args);
  }

  /**
   * List Revalidation Triggers
   */
  async getRevalidationTrigger(...args: Parameters<typeof monitoringService.getRevalidationTrigger>): Promise<any> {
    return monitoringService.getRevalidationTrigger(...args);
  }
};
