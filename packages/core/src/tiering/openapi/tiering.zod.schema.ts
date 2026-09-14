import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const assessModelTier_Body = z
  .object({
    tier: z.number().int().gte(1).lte(3),
    scores: z.record(z.number()),
    rationale: z.string(),
  })
  .passthrough();
const updateTierCriteria_Body = z
  .object({
    version: z.string(),
    dimensions: z.array(
      z
        .object({
          name: z.enum([
            'materiality',
            'potential_loss',
            'parameter_uncertainty',
            'regulatory_impact',
            'intended_use',
          ]),
          weight: z.number(),
        })
        .passthrough()
    ),
    ownedByControlUnit: z.boolean().optional(),
    effectiveFrom: z.string().datetime({ offset: true }).optional(),
  })
  .passthrough();
const TierAssessment = z
  .object({
    id: z.string(),
    modelId: z.string(),
    tier: z.number().int().gte(1).lte(3),
    scores: z.record(z.number()).optional(),
    rationale: z.string().optional(),
    assessedBy: z.string().optional(),
    assessedAt: z.string().datetime({ offset: true }),
    playbookId: z.string().optional(),
  })
  .passthrough();
const TierAssessmentListData = z
  .object({
    items: z.array(
      z
        .object({
          id: z.string(),
          modelId: z.string(),
          tier: z.number().int().gte(1).lte(3),
          scores: z.record(z.number()).optional(),
          rationale: z.string().optional(),
          assessedBy: z.string().optional(),
          assessedAt: z.string().datetime({ offset: true }),
          playbookId: z.string().optional(),
        })
        .passthrough()
    ),
  })
  .passthrough();
const ResponseMeta = z
  .object({
    requestId: z.string().uuid(),
    correlationId: z.string(),
    generatedAt: z.string().datetime({ offset: true }),
    timestamp: z.string().datetime({ offset: true }),
  })
  .partial()
  .passthrough();
const TierAssessmentListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string(),
              modelId: z.string(),
              tier: z.number().int().gte(1).lte(3),
              scores: z.record(z.number()).optional(),
              rationale: z.string().optional(),
              assessedBy: z.string().optional(),
              assessedAt: z.string().datetime({ offset: true }),
              playbookId: z.string().optional(),
            })
            .passthrough()
        ),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
        timestamp: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const Problem = z
  .object({
    type: z.string().url(),
    title: z.string(),
    status: z.number().int(),
    detail: z.string(),
    instance: z.string().url(),
    code: z.string(),
  })
  .partial()
  .passthrough();
const TierAssessmentCreate = z
  .object({
    tier: z.number().int().gte(1).lte(3),
    scores: z.record(z.number()),
    rationale: z.string(),
  })
  .passthrough();
const TierAssessmentResponse = z
  .object({
    data: z
      .object({
        id: z.string(),
        modelId: z.string(),
        tier: z.number().int().gte(1).lte(3),
        scores: z.record(z.number()).optional(),
        rationale: z.string().optional(),
        assessedBy: z.string().optional(),
        assessedAt: z.string().datetime({ offset: true }),
        playbookId: z.string().optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
        timestamp: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();
const TierCriteria = z
  .object({
    version: z.string(),
    dimensions: z.array(
      z
        .object({
          name: z.enum([
            'materiality',
            'potential_loss',
            'parameter_uncertainty',
            'regulatory_impact',
            'intended_use',
          ]),
          weight: z.number(),
        })
        .passthrough()
    ),
    ownedByControlUnit: z.boolean().optional(),
    effectiveFrom: z.string().datetime({ offset: true }).optional(),
  })
  .passthrough();
const TierCriteriaResponse = z
  .object({
    data: z
      .object({
        version: z.string(),
        dimensions: z.array(
          z
            .object({
              name: z.enum([
                'materiality',
                'potential_loss',
                'parameter_uncertainty',
                'regulatory_impact',
                'intended_use',
              ]),
              weight: z.number(),
            })
            .passthrough()
        ),
        ownedByControlUnit: z.boolean().optional(),
        effectiveFrom: z.string().datetime({ offset: true }).optional(),
      })
      .passthrough(),
    meta: z
      .object({
        requestId: z.string().uuid(),
        correlationId: z.string(),
        generatedAt: z.string().datetime({ offset: true }),
        timestamp: z.string().datetime({ offset: true }),
      })
      .partial()
      .passthrough()
      .optional(),
  })
  .passthrough();

export const schemas: any = {
  assessModelTier_Body,
  updateTierCriteria_Body,
  TierAssessment,
  TierAssessmentListData,
  ResponseMeta,
  TierAssessmentListResponse,
  Problem,
  TierAssessmentCreate,
  TierAssessmentResponse,
  TierCriteria,
  TierCriteriaResponse,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/models/:modelId/tier-assessments',
    alias: 'listTierAssessments',
    requestFormat: 'json',
    parameters: [
      {
        name: 'modelId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            items: z.array(
              z
                .object({
                  id: z.string(),
                  modelId: z.string(),
                  tier: z.number().int().gte(1).lte(3),
                  scores: z.record(z.number()).optional(),
                  rationale: z.string().optional(),
                  assessedBy: z.string().optional(),
                  assessedAt: z.string().datetime({ offset: true }),
                  playbookId: z.string().optional(),
                })
                .passthrough()
            ),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
            timestamp: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'post',
    path: '/v1/models/:modelId/tier-assessments',
    alias: 'assessModelTier',
    description: `Set tier from materiality, potential financial loss, parameter uncertainty, regulatory impact, and intended use. Tier selects the validation playbook.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: assessModelTier_Body,
      },
      {
        name: 'modelId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            modelId: z.string(),
            tier: z.number().int().gte(1).lte(3),
            scores: z.record(z.number()).optional(),
            rationale: z.string().optional(),
            assessedBy: z.string().optional(),
            assessedAt: z.string().datetime({ offset: true }),
            playbookId: z.string().optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
            timestamp: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'get',
    path: '/v1/tier-criteria',
    alias: 'getTierCriteria',
    requestFormat: 'json',
    response: z
      .object({
        data: z
          .object({
            version: z.string(),
            dimensions: z.array(
              z
                .object({
                  name: z.enum([
                    'materiality',
                    'potential_loss',
                    'parameter_uncertainty',
                    'regulatory_impact',
                    'intended_use',
                  ]),
                  weight: z.number(),
                })
                .passthrough()
            ),
            ownedByControlUnit: z.boolean().optional(),
            effectiveFrom: z.string().datetime({ offset: true }).optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
            timestamp: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
  {
    method: 'put',
    path: '/v1/tier-criteria',
    alias: 'updateTierCriteria',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: updateTierCriteria_Body,
      },
    ],
    response: z
      .object({
        data: z
          .object({
            version: z.string(),
            dimensions: z.array(
              z
                .object({
                  name: z.enum([
                    'materiality',
                    'potential_loss',
                    'parameter_uncertainty',
                    'regulatory_impact',
                    'intended_use',
                  ]),
                  weight: z.number(),
                })
                .passthrough()
            ),
            ownedByControlUnit: z.boolean().optional(),
            effectiveFrom: z.string().datetime({ offset: true }).optional(),
          })
          .passthrough(),
        meta: z
          .object({
            requestId: z.string().uuid(),
            correlationId: z.string(),
            generatedAt: z.string().datetime({ offset: true }),
            timestamp: z.string().datetime({ offset: true }),
          })
          .partial()
          .passthrough()
          .optional(),
      })
      .passthrough(),
    errors: [
      {
        status: 401,
        description: `Missing or invalid API key`,
        schema: z
          .object({
            type: z.string().url(),
            title: z.string(),
            status: z.number().int(),
            detail: z.string(),
            instance: z.string().url(),
            code: z.string(),
          })
          .partial()
          .passthrough(),
      },
    ],
  },
]);

export const api: any = new Zodios(
  'https://api.ddd-codegen-starter.local/v1',
  endpoints
);

export function createApiClient(baseUrl: string, options?: ZodiosOptions): any {
  return new Zodios(baseUrl, endpoints, options);
}
