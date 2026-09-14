import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const registerArtefact_Body = z
  .object({
    name: z.string(),
    ownerFunction: z.string().optional(),
    sourceSystem: z.string().optional(),
    description: z.string().optional(),
  })
  .passthrough();
const determineArtefact_Body = z
  .object({
    outcome: z.enum(['model', 'not_model']),
    criteriaApplied: z.array(z.string()),
    rationale: z.string(),
  })
  .passthrough();
const Artefact = z
  .object({
    id: z.string(),
    name: z.string(),
    ownerFunction: z.string().optional(),
    determinationStatus: z.enum(['model', 'not_model', 'pending']),
    sourceSystem: z.string().optional(),
  })
  .passthrough();
const ArtefactListData = z
  .object({
    items: z.array(
      z
        .object({
          id: z.string(),
          name: z.string(),
          ownerFunction: z.string().optional(),
          determinationStatus: z.enum(['model', 'not_model', 'pending']),
          sourceSystem: z.string().optional(),
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
const ArtefactListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string(),
              name: z.string(),
              ownerFunction: z.string().optional(),
              determinationStatus: z.enum(['model', 'not_model', 'pending']),
              sourceSystem: z.string().optional(),
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
const ArtefactCreate = z
  .object({
    name: z.string(),
    ownerFunction: z.string().optional(),
    sourceSystem: z.string().optional(),
    description: z.string().optional(),
  })
  .passthrough();
const ArtefactResponse = z
  .object({
    data: z
      .object({
        id: z.string(),
        name: z.string(),
        ownerFunction: z.string().optional(),
        determinationStatus: z.enum(['model', 'not_model', 'pending']),
        sourceSystem: z.string().optional(),
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
const ModelDeterminationCreate = z
  .object({
    outcome: z.enum(['model', 'not_model']),
    criteriaApplied: z.array(z.string()),
    rationale: z.string(),
  })
  .passthrough();
const ModelDetermination = z
  .object({
    id: z.string(),
    artefactId: z.string(),
    outcome: z.enum(['model', 'not_model']),
    criteriaApplied: z.array(z.string()).optional(),
    rationale: z.string().optional(),
    determinedBy: z.string(),
    determinedAt: z.string().datetime({ offset: true }),
    appealPath: z.string().optional(),
  })
  .passthrough();
const ModelDeterminationResponse = z
  .object({
    data: z
      .object({
        id: z.string(),
        artefactId: z.string(),
        outcome: z.enum(['model', 'not_model']),
        criteriaApplied: z.array(z.string()).optional(),
        rationale: z.string().optional(),
        determinedBy: z.string(),
        determinedAt: z.string().datetime({ offset: true }),
        appealPath: z.string().optional(),
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
const Model = z
  .object({
    id: z.string(),
    artefactId: z.string().optional(),
    name: z.string(),
    status: z.enum([
      'inventory',
      'queued',
      'in_validation',
      'approved',
      'constrained',
      'retired',
    ]),
    tier: z.number().int().gte(1).lte(3),
    ownerId: z.string().optional(),
    developerTeamId: z.string().optional(),
    intendedUse: z.string().optional(),
    regulatoryImpact: z
      .enum(['none', 'low', 'material', 'capital_relevant'])
      .optional(),
  })
  .passthrough();
const ModelListData = z
  .object({
    items: z.array(
      z
        .object({
          id: z.string(),
          artefactId: z.string().optional(),
          name: z.string(),
          status: z.enum([
            'inventory',
            'queued',
            'in_validation',
            'approved',
            'constrained',
            'retired',
          ]),
          tier: z.number().int().gte(1).lte(3),
          ownerId: z.string().optional(),
          developerTeamId: z.string().optional(),
          intendedUse: z.string().optional(),
          regulatoryImpact: z
            .enum(['none', 'low', 'material', 'capital_relevant'])
            .optional(),
        })
        .passthrough()
    ),
  })
  .passthrough();
const ModelListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string(),
              artefactId: z.string().optional(),
              name: z.string(),
              status: z.enum([
                'inventory',
                'queued',
                'in_validation',
                'approved',
                'constrained',
                'retired',
              ]),
              tier: z.number().int().gte(1).lte(3),
              ownerId: z.string().optional(),
              developerTeamId: z.string().optional(),
              intendedUse: z.string().optional(),
              regulatoryImpact: z
                .enum(['none', 'low', 'material', 'capital_relevant'])
                .optional(),
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
const ModelResponse = z
  .object({
    data: z
      .object({
        id: z.string(),
        artefactId: z.string().optional(),
        name: z.string(),
        status: z.enum([
          'inventory',
          'queued',
          'in_validation',
          'approved',
          'constrained',
          'retired',
        ]),
        tier: z.number().int().gte(1).lte(3),
        ownerId: z.string().optional(),
        developerTeamId: z.string().optional(),
        intendedUse: z.string().optional(),
        regulatoryImpact: z
          .enum(['none', 'low', 'material', 'capital_relevant'])
          .optional(),
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
  registerArtefact_Body,
  determineArtefact_Body,
  Artefact,
  ArtefactListData,
  ResponseMeta,
  ArtefactListResponse,
  Problem,
  ArtefactCreate,
  ArtefactResponse,
  ModelDeterminationCreate,
  ModelDetermination,
  ModelDeterminationResponse,
  Model,
  ModelListData,
  ModelListResponse,
  ModelResponse,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/artefacts',
    alias: 'listArtefacts',
    requestFormat: 'json',
    parameters: [
      {
        name: 'cursor',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(1).lte(200).optional().default(50),
      },
      {
        name: 'determination',
        type: 'Query',
        schema: z.enum(['model', 'not_model', 'pending']).optional(),
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
                  name: z.string(),
                  ownerFunction: z.string().optional(),
                  determinationStatus: z.enum([
                    'model',
                    'not_model',
                    'pending',
                  ]),
                  sourceSystem: z.string().optional(),
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
    path: '/v1/artefacts',
    alias: 'registerArtefact',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: registerArtefact_Body,
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            name: z.string(),
            ownerFunction: z.string().optional(),
            determinationStatus: z.enum(['model', 'not_model', 'pending']),
            sourceSystem: z.string().optional(),
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
    path: '/v1/artefacts/:artefactId/determination',
    alias: 'determineArtefact',
    description: `Record a dated model-or-not determination against published criteria. An inventory whose boundary is undocumented cannot support capital quantification or supervisory challenge.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: determineArtefact_Body,
      },
      {
        name: 'artefactId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            artefactId: z.string(),
            outcome: z.enum(['model', 'not_model']),
            criteriaApplied: z.array(z.string()).optional(),
            rationale: z.string().optional(),
            determinedBy: z.string(),
            determinedAt: z.string().datetime({ offset: true }),
            appealPath: z.string().optional(),
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
        status: 422,
        description: `Semantically invalid request (e.g. PACK_EMPTY)`,
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
    path: '/v1/models',
    alias: 'listModels',
    requestFormat: 'json',
    parameters: [
      {
        name: 'cursor',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'limit',
        type: 'Query',
        schema: z.number().int().gte(1).lte(200).optional().default(50),
      },
      {
        name: 'tier',
        type: 'Query',
        schema: z.number().int().gte(1).lte(3).optional(),
      },
      {
        name: 'status',
        type: 'Query',
        schema: z
          .enum([
            'inventory',
            'queued',
            'in_validation',
            'approved',
            'constrained',
            'retired',
          ])
          .optional(),
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
                  artefactId: z.string().optional(),
                  name: z.string(),
                  status: z.enum([
                    'inventory',
                    'queued',
                    'in_validation',
                    'approved',
                    'constrained',
                    'retired',
                  ]),
                  tier: z.number().int().gte(1).lte(3),
                  ownerId: z.string().optional(),
                  developerTeamId: z.string().optional(),
                  intendedUse: z.string().optional(),
                  regulatoryImpact: z
                    .enum(['none', 'low', 'material', 'capital_relevant'])
                    .optional(),
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
    method: 'get',
    path: '/v1/models/:modelId',
    alias: 'getModel',
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
            id: z.string(),
            artefactId: z.string().optional(),
            name: z.string(),
            status: z.enum([
              'inventory',
              'queued',
              'in_validation',
              'approved',
              'constrained',
              'retired',
            ]),
            tier: z.number().int().gte(1).lte(3),
            ownerId: z.string().optional(),
            developerTeamId: z.string().optional(),
            intendedUse: z.string().optional(),
            regulatoryImpact: z
              .enum(['none', 'low', 'material', 'capital_relevant'])
              .optional(),
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
        status: 404,
        description: `Resource not found`,
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
