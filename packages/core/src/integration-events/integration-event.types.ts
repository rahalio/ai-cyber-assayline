/**
 * Integration event type definition (registry entry shape).
 */

export interface IntegrationEventTypeDefinition {
  type: string;
  domain: string;
  aggregateType?: string;
  description?: string;
  defaultDeliveryMode?: 'sync' | 'async';
}
