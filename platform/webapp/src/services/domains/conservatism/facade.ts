/**
 * Conservatism Domain Facade
 *
 * High-level API for conservatism domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { conservatismService } from "./conservatism.service";
// TODO: Import types
// import type { ... } from "./conservatism.api-types";

/**
 * Conservatism Facade
 *
 * High-level API for conservatism operations.
 * Components should use this facade instead of services directly.
 */
export const conservatismFacade = {
  /**
   * List Conservatism Overlays
   */
  async getConservatismOverlay(...args: Parameters<typeof conservatismService.getConservatismOverlay>): Promise<any> {
    return conservatismService.getConservatismOverlay(...args);
  }

  /**
   * Declare Conservatism Overlay
   */
  async getConservatismOverlay(...args: Parameters<typeof conservatismService.getConservatismOverlay>): Promise<any> {
    return conservatismService.getConservatismOverlay(...args);
  }

  /**
   * Get Conservatism Aggregate
   */
  async getAggregate(...args: Parameters<typeof conservatismService.getAggregate>): Promise<any> {
    return conservatismService.getAggregate(...args);
  }
};
