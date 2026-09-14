/**
 * Use Domain Facade
 *
 * High-level API for use domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { useService } from "./use.service";
// TODO: Import types
// import type { ... } from "./use.api-types";

/**
 * Use Facade
 *
 * High-level API for use operations.
 * Components should use this facade instead of services directly.
 */
export const useFacade = {
  /**
   * Get Permitted Use
   */
  async getPermittedUse(...args: Parameters<typeof useService.getPermittedUse>): Promise<any> {
    return useService.getPermittedUse(...args);
  }

  /**
   * Set Permitted Use
   */
  async updatePermittedUse(...args: Parameters<typeof useService.updatePermittedUse>): Promise<any> {
    return useService.updatePermittedUse(...args);
  }

  /**
   * List Use Exceptions
   */
  async getUseException(...args: Parameters<typeof useService.getUseException>): Promise<any> {
    return useService.getUseException(...args);
  }

  /**
   * Request Use Exception
   */
  async getUseException(...args: Parameters<typeof useService.getUseException>): Promise<any> {
    return useService.getUseException(...args);
  }

  /**
   * Authorise Use Exception
   */
  async getAuthorise(...args: Parameters<typeof useService.getAuthorise>): Promise<any> {
    return useService.getAuthorise(...args);
  }
};
