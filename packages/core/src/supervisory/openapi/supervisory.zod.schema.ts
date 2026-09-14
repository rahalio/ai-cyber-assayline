import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const recordSupervisoryAddOn_Body = z
  .object({
    amount: z
      .object({
        amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
        currency: z
          .string()
          .min(3)
          .max(3)
          .regex(/^[A-Z]{3}$/),
      })
      .passthrough(),
    attributedCause: z.string(),
    imposedAt: z.string().datetime({ offset: true }).optional(),
  })
  .passthrough();
const updateRemediationPlan_Body = z
  .object({
    actions: z.array(z.string()),
    ownerId: z.string().optional(),
    targetDate: z.string().optional(),
    targetReduction: z
      .object({
        amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
        currency: z
          .string()
          .min(3)
          .max(3)
          .regex(/^[A-Z]{3}$/),
      })
      .passthrough(),
    progressNotes: z.string().optional(),
  })
  .passthrough();
const assembleSupervisoryPack_Body = z
  .object({
    scope: z.enum(['full_estate', 'regulatory_models', 'material_models']),
    asOf: z.string().datetime({ offset: true }).optional(),
    examinationReference: z.string().optional(),
  })
  .passthrough();
const Currency = z.string();
const Money = z
  .object({
    amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
    currency: z
      .string()
      .min(3)
      .max(3)
      .regex(/^[A-Z]{3}$/),
  })
  .passthrough();
const RemediationPlan = z
  .object({
    actions: z.array(z.string()),
    ownerId: z.string().optional(),
    targetDate: z.string().optional(),
    targetReduction: z
      .object({
        amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
        currency: z
          .string()
          .min(3)
          .max(3)
          .regex(/^[A-Z]{3}$/),
      })
      .passthrough(),
    progressNotes: z.string().optional(),
  })
  .passthrough();
const SupervisoryAddOn = z
  .object({
    id: z.string(),
    amount: z
      .object({
        amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
        currency: z
          .string()
          .min(3)
          .max(3)
          .regex(/^[A-Z]{3}$/),
      })
      .passthrough(),
    status: z.enum(['open', 'remediating', 'reduced', 'closed']),
    imposedAt: z.string().datetime({ offset: true }).optional(),
    attributedCause: z.string().optional(),
    remediationPlan: z
      .object({
        actions: z.array(z.string()),
        ownerId: z.string().optional(),
        targetDate: z.string().optional(),
        targetReduction: z
          .object({
            amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
            currency: z
              .string()
              .min(3)
              .max(3)
              .regex(/^[A-Z]{3}$/),
          })
          .passthrough(),
        progressNotes: z.string().optional(),
      })
      .passthrough()
      .optional(),
    measuredReduction: z
      .object({
        amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
        currency: z
          .string()
          .min(3)
          .max(3)
          .regex(/^[A-Z]{3}$/),
      })
      .passthrough()
      .optional(),
  })
  .passthrough();
const SupervisoryAddOnListData = z
  .object({
    items: z.array(
      z
        .object({
          id: z.string(),
          amount: z
            .object({
              amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
              currency: z
                .string()
                .min(3)
                .max(3)
                .regex(/^[A-Z]{3}$/),
            })
            .passthrough(),
          status: z.enum(['open', 'remediating', 'reduced', 'closed']),
          imposedAt: z.string().datetime({ offset: true }).optional(),
          attributedCause: z.string().optional(),
          remediationPlan: z
            .object({
              actions: z.array(z.string()),
              ownerId: z.string().optional(),
              targetDate: z.string().optional(),
              targetReduction: z
                .object({
                  amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                  currency: z
                    .string()
                    .min(3)
                    .max(3)
                    .regex(/^[A-Z]{3}$/),
                })
                .passthrough(),
              progressNotes: z.string().optional(),
            })
            .passthrough()
            .optional(),
          measuredReduction: z
            .object({
              amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
              currency: z
                .string()
                .min(3)
                .max(3)
                .regex(/^[A-Z]{3}$/),
            })
            .passthrough()
            .optional(),
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
const SupervisoryAddOnListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string(),
              amount: z
                .object({
                  amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                  currency: z
                    .string()
                    .min(3)
                    .max(3)
                    .regex(/^[A-Z]{3}$/),
                })
                .passthrough(),
              status: z.enum(['open', 'remediating', 'reduced', 'closed']),
              imposedAt: z.string().datetime({ offset: true }).optional(),
              attributedCause: z.string().optional(),
              remediationPlan: z
                .object({
                  actions: z.array(z.string()),
                  ownerId: z.string().optional(),
                  targetDate: z.string().optional(),
                  targetReduction: z
                    .object({
                      amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                      currency: z
                        .string()
                        .min(3)
                        .max(3)
                        .regex(/^[A-Z]{3}$/),
                    })
                    .passthrough(),
                  progressNotes: z.string().optional(),
                })
                .passthrough()
                .optional(),
              measuredReduction: z
                .object({
                  amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                  currency: z
                    .string()
                    .min(3)
                    .max(3)
                    .regex(/^[A-Z]{3}$/),
                })
                .passthrough()
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
const SupervisoryAddOnCreate = z
  .object({
    amount: z
      .object({
        amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
        currency: z
          .string()
          .min(3)
          .max(3)
          .regex(/^[A-Z]{3}$/),
      })
      .passthrough(),
    attributedCause: z.string(),
    imposedAt: z.string().datetime({ offset: true }).optional(),
  })
  .passthrough();
const SupervisoryAddOnResponse = z
  .object({
    data: z
      .object({
        id: z.string(),
        amount: z
          .object({
            amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
            currency: z
              .string()
              .min(3)
              .max(3)
              .regex(/^[A-Z]{3}$/),
          })
          .passthrough(),
        status: z.enum(['open', 'remediating', 'reduced', 'closed']),
        imposedAt: z.string().datetime({ offset: true }).optional(),
        attributedCause: z.string().optional(),
        remediationPlan: z
          .object({
            actions: z.array(z.string()),
            ownerId: z.string().optional(),
            targetDate: z.string().optional(),
            targetReduction: z
              .object({
                amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                currency: z
                  .string()
                  .min(3)
                  .max(3)
                  .regex(/^[A-Z]{3}$/),
              })
              .passthrough(),
            progressNotes: z.string().optional(),
          })
          .passthrough()
          .optional(),
        measuredReduction: z
          .object({
            amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
            currency: z
              .string()
              .min(3)
              .max(3)
              .regex(/^[A-Z]{3}$/),
          })
          .passthrough()
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
const SupervisoryPack = z
  .object({
    id: z.string(),
    scope: z.enum(['full_estate', 'regulatory_models', 'material_models']),
    assembledAt: z.string().datetime({ offset: true }),
    examinationReference: z.string().optional(),
    includedModelCount: z.number().int().optional(),
    openFindingsCount: z.number().int().optional(),
    aggregateModelRisk: z
      .object({
        amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
        currency: z
          .string()
          .min(3)
          .max(3)
          .regex(/^[A-Z]{3}$/),
      })
      .passthrough()
      .optional(),
    packUri: z.string().url().optional(),
  })
  .passthrough();
const SupervisoryPackResponse = z
  .object({
    data: z
      .object({
        id: z.string(),
        scope: z.enum(['full_estate', 'regulatory_models', 'material_models']),
        assembledAt: z.string().datetime({ offset: true }),
        examinationReference: z.string().optional(),
        includedModelCount: z.number().int().optional(),
        openFindingsCount: z.number().int().optional(),
        aggregateModelRisk: z
          .object({
            amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
            currency: z
              .string()
              .min(3)
              .max(3)
              .regex(/^[A-Z]{3}$/),
          })
          .passthrough()
          .optional(),
        packUri: z.string().url().optional(),
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
  recordSupervisoryAddOn_Body,
  updateRemediationPlan_Body,
  assembleSupervisoryPack_Body,
  Currency,
  Money,
  RemediationPlan,
  SupervisoryAddOn,
  SupervisoryAddOnListData,
  ResponseMeta,
  SupervisoryAddOnListResponse,
  Problem,
  SupervisoryAddOnCreate,
  SupervisoryAddOnResponse,
  SupervisoryPack,
  SupervisoryPackResponse,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/supervisory-add-ons',
    alias: 'listSupervisoryAddOns',
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
        name: 'status',
        type: 'Query',
        schema: z.enum(['open', 'remediating', 'reduced', 'closed']).optional(),
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
                  amount: z
                    .object({
                      amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                      currency: z
                        .string()
                        .min(3)
                        .max(3)
                        .regex(/^[A-Z]{3}$/),
                    })
                    .passthrough(),
                  status: z.enum(['open', 'remediating', 'reduced', 'closed']),
                  imposedAt: z.string().datetime({ offset: true }).optional(),
                  attributedCause: z.string().optional(),
                  remediationPlan: z
                    .object({
                      actions: z.array(z.string()),
                      ownerId: z.string().optional(),
                      targetDate: z.string().optional(),
                      targetReduction: z
                        .object({
                          amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                          currency: z
                            .string()
                            .min(3)
                            .max(3)
                            .regex(/^[A-Z]{3}$/),
                        })
                        .passthrough(),
                      progressNotes: z.string().optional(),
                    })
                    .passthrough()
                    .optional(),
                  measuredReduction: z
                    .object({
                      amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                      currency: z
                        .string()
                        .min(3)
                        .max(3)
                        .regex(/^[A-Z]{3}$/),
                    })
                    .passthrough()
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
    method: 'post',
    path: '/v1/supervisory-add-ons',
    alias: 'recordSupervisoryAddOn',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: recordSupervisoryAddOn_Body,
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            amount: z
              .object({
                amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                currency: z
                  .string()
                  .min(3)
                  .max(3)
                  .regex(/^[A-Z]{3}$/),
              })
              .passthrough(),
            status: z.enum(['open', 'remediating', 'reduced', 'closed']),
            imposedAt: z.string().datetime({ offset: true }).optional(),
            attributedCause: z.string().optional(),
            remediationPlan: z
              .object({
                actions: z.array(z.string()),
                ownerId: z.string().optional(),
                targetDate: z.string().optional(),
                targetReduction: z
                  .object({
                    amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                    currency: z
                      .string()
                      .min(3)
                      .max(3)
                      .regex(/^[A-Z]{3}$/),
                  })
                  .passthrough(),
                progressNotes: z.string().optional(),
              })
              .passthrough()
              .optional(),
            measuredReduction: z
              .object({
                amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                currency: z
                  .string()
                  .min(3)
                  .max(3)
                  .regex(/^[A-Z]{3}$/),
              })
              .passthrough()
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
    path: '/v1/supervisory-add-ons/:addOnId/remediation',
    alias: 'updateRemediationPlan',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: updateRemediationPlan_Body,
      },
      {
        name: 'addOnId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            amount: z
              .object({
                amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                currency: z
                  .string()
                  .min(3)
                  .max(3)
                  .regex(/^[A-Z]{3}$/),
              })
              .passthrough(),
            status: z.enum(['open', 'remediating', 'reduced', 'closed']),
            imposedAt: z.string().datetime({ offset: true }).optional(),
            attributedCause: z.string().optional(),
            remediationPlan: z
              .object({
                actions: z.array(z.string()),
                ownerId: z.string().optional(),
                targetDate: z.string().optional(),
                targetReduction: z
                  .object({
                    amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                    currency: z
                      .string()
                      .min(3)
                      .max(3)
                      .regex(/^[A-Z]{3}$/),
                  })
                  .passthrough(),
                progressNotes: z.string().optional(),
              })
              .passthrough()
              .optional(),
            measuredReduction: z
              .object({
                amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                currency: z
                  .string()
                  .min(3)
                  .max(3)
                  .regex(/^[A-Z]{3}$/),
              })
              .passthrough()
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
    path: '/v1/supervisory-packs',
    alias: 'assembleSupervisoryPack',
    description: `Assemble an examination pack from the live record — inventory boundary decisions, tiering rationale, validation evidence, open findings, and quantified model risk against appetite.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: assembleSupervisoryPack_Body,
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            scope: z.enum([
              'full_estate',
              'regulatory_models',
              'material_models',
            ]),
            assembledAt: z.string().datetime({ offset: true }),
            examinationReference: z.string().optional(),
            includedModelCount: z.number().int().optional(),
            openFindingsCount: z.number().int().optional(),
            aggregateModelRisk: z
              .object({
                amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                currency: z
                  .string()
                  .min(3)
                  .max(3)
                  .regex(/^[A-Z]{3}$/),
              })
              .passthrough()
              .optional(),
            packUri: z.string().url().optional(),
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
    path: '/v1/supervisory-packs/:packId',
    alias: 'getSupervisoryPack',
    requestFormat: 'json',
    parameters: [
      {
        name: 'packId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            scope: z.enum([
              'full_estate',
              'regulatory_models',
              'material_models',
            ]),
            assembledAt: z.string().datetime({ offset: true }),
            examinationReference: z.string().optional(),
            includedModelCount: z.number().int().optional(),
            openFindingsCount: z.number().int().optional(),
            aggregateModelRisk: z
              .object({
                amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                currency: z
                  .string()
                  .min(3)
                  .max(3)
                  .regex(/^[A-Z]{3}$/),
              })
              .passthrough()
              .optional(),
            packUri: z.string().url().optional(),
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
