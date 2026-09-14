/**
 * Quantification Domain Facade
 *
 * High-level API for quantification domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { quantificationService } from "./quantification.service";
// TODO: Import types
// import type { ... } from "./quantification.api-types";

/**
 * Quantification Facade
 *
 * High-level API for quantification operations.
 * Components should use this facade instead of services directly.
 */
export const quantificationFacade = {
  /**
   * List Quantifications
   */
  async getQuantification(...args: Parameters<typeof quantificationService.getQuantification>): Promise<any> {
    return quantificationService.getQuantification(...args);
  }

  /**
   * Record Quantification
   */
  async getQuantification(...args: Parameters<typeof quantificationService.getQuantification>): Promise<any> {
    return quantificationService.getQuantification(...args);
  }

  /**
   * Get Risk Appetite Statement
   */
  async getRiskAppetite(...args: Parameters<typeof quantificationService.getRiskAppetite>): Promise<any> {
    return quantificationService.getRiskAppetite(...args);
  }

  /**
   * Update Risk Appetite Statement
   */
  async updateRiskAppetite(...args: Parameters<typeof quantificationService.updateRiskAppetite>): Promise<any> {
    return quantificationService.updateRiskAppetite(...args);
  }

  /**
   * List Lump Sum Buffers
   */
  async getLumpSumBuffer(...args: Parameters<typeof quantificationService.getLumpSumBuffer>): Promise<any> {
    return quantificationService.getLumpSumBuffer(...args);
  }

  /**
   * Fix Lump Sum Buffer
   */
  async getLumpSumBuffer(...args: Parameters<typeof quantificationService.getLumpSumBuffer>): Promise<any> {
    return quantificationService.getLumpSumBuffer(...args);
  }
};
