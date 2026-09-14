/**
 * Supervisory Domain Facade
 *
 * High-level API for supervisory domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { supervisoryService } from "./supervisory.service";
// TODO: Import types
// import type { ... } from "./supervisory.api-types";

/**
 * Supervisory Facade
 *
 * High-level API for supervisory operations.
 * Components should use this facade instead of services directly.
 */
export const supervisoryFacade = {
  /**
   * List Supervisory Add Ons
   */
  async getSupervisoryAddOn(...args: Parameters<typeof supervisoryService.getSupervisoryAddOn>): Promise<any> {
    return supervisoryService.getSupervisoryAddOn(...args);
  }

  /**
   * Record Supervisory Add On
   */
  async getSupervisoryAddOn(...args: Parameters<typeof supervisoryService.getSupervisoryAddOn>): Promise<any> {
    return supervisoryService.getSupervisoryAddOn(...args);
  }

  /**
   * Update Remediation Plan
   */
  async updateRemediation(...args: Parameters<typeof supervisoryService.updateRemediation>): Promise<any> {
    return supervisoryService.updateRemediation(...args);
  }

  /**
   * Assemble Supervisory Pack
   */
  async getSupervisoryPack(...args: Parameters<typeof supervisoryService.getSupervisoryPack>): Promise<any> {
    return supervisoryService.getSupervisoryPack(...args);
  }

  /**
   * Get Supervisory Pack
   */
  async getSupervisoryPack(...args: Parameters<typeof supervisoryService.getSupervisoryPack>): Promise<any> {
    return supervisoryService.getSupervisoryPack(...args);
  }
};
