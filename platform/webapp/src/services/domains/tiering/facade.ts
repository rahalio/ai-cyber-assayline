/**
 * Tiering Domain Facade
 *
 * High-level API for tiering domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { tieringService } from "./tiering.service";
// TODO: Import types
// import type { ... } from "./tiering.api-types";

/**
 * Tiering Facade
 *
 * High-level API for tiering operations.
 * Components should use this facade instead of services directly.
 */
export const tieringFacade = {
  /**
   * List Tier Assessments
   */
  async getTierAssessment(...args: Parameters<typeof tieringService.getTierAssessment>): Promise<any> {
    return tieringService.getTierAssessment(...args);
  }

  /**
   * Assess Model Tier
   */
  async getTierAssessment(...args: Parameters<typeof tieringService.getTierAssessment>): Promise<any> {
    return tieringService.getTierAssessment(...args);
  }

  /**
   * Get Tier Criteria
   */
  async getTierCriterium(...args: Parameters<typeof tieringService.getTierCriterium>): Promise<any> {
    return tieringService.getTierCriterium(...args);
  }

  /**
   * Update Tier Criteria
   */
  async updateTierCriterium(...args: Parameters<typeof tieringService.updateTierCriterium>): Promise<any> {
    return tieringService.updateTierCriterium(...args);
  }
};
