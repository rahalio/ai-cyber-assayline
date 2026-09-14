import { makeApi, Zodios, type ZodiosOptions } from '@zodios/core';
import { z } from 'zod';

const allocateValidationSlot_Body = z
  .object({
    submissionId: z.string(),
    scheduledStart: z.string().datetime({ offset: true }),
    scheduledEnd: z.string().datetime({ offset: true }),
    preferredValidatorId: z.string().optional(),
  })
  .passthrough();
const createValidationEngagement_Body = z
  .object({
    modelId: z.string(),
    slotId: z.string(),
    leadValidatorId: z.string(),
  })
  .passthrough();
const placeValidationTask_Body = z
  .object({
    taskType: z.enum([
      'data_quality',
      'standardised_testing',
      'replication',
      'sensitivity_analysis',
      'initial_documentation',
      'monitoring_review',
      'conceptual_soundness',
      'challenger_construction',
      'implementation_review',
    ]),
    placement: z.enum(['onshore', 'offshore', 'external']),
    dataSensitivityBasis: z.enum(['full', 'masked', 'sampled', 'synthetic']),
    assigneeId: z.string().optional(),
  })
  .passthrough();
const ValidationSlot = z
  .object({
    id: z.string(),
    submissionId: z.string().optional(),
    modelId: z.string().optional(),
    status: z.enum(['open', 'allocated', 'deferred', 'released']),
    tier: z.number().int(),
    scheduledStart: z.string().datetime({ offset: true }).optional(),
    scheduledEnd: z.string().datetime({ offset: true }).optional(),
    validatorId: z.string().optional(),
  })
  .passthrough();
const ValidationSlotListData = z
  .object({
    items: z.array(
      z
        .object({
          id: z.string(),
          submissionId: z.string().optional(),
          modelId: z.string().optional(),
          status: z.enum(['open', 'allocated', 'deferred', 'released']),
          tier: z.number().int(),
          scheduledStart: z.string().datetime({ offset: true }).optional(),
          scheduledEnd: z.string().datetime({ offset: true }).optional(),
          validatorId: z.string().optional(),
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
const ValidationSlotListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string(),
              submissionId: z.string().optional(),
              modelId: z.string().optional(),
              status: z.enum(['open', 'allocated', 'deferred', 'released']),
              tier: z.number().int(),
              scheduledStart: z.string().datetime({ offset: true }).optional(),
              scheduledEnd: z.string().datetime({ offset: true }).optional(),
              validatorId: z.string().optional(),
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
const ValidationSlotAllocate = z
  .object({
    submissionId: z.string(),
    scheduledStart: z.string().datetime({ offset: true }),
    scheduledEnd: z.string().datetime({ offset: true }),
    preferredValidatorId: z.string().optional(),
  })
  .passthrough();
const ValidationSlotResponse = z
  .object({
    data: z
      .object({
        id: z.string(),
        submissionId: z.string().optional(),
        modelId: z.string().optional(),
        status: z.enum(['open', 'allocated', 'deferred', 'released']),
        tier: z.number().int(),
        scheduledStart: z.string().datetime({ offset: true }).optional(),
        scheduledEnd: z.string().datetime({ offset: true }).optional(),
        validatorId: z.string().optional(),
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
const ValidationEngagement = z
  .object({
    id: z.string(),
    modelId: z.string(),
    slotId: z.string().optional(),
    tier: z.number().int(),
    status: z.enum(['planned', 'in_progress', 'completed', 'aborted']),
    playbookSteps: z
      .array(
        z.enum([
          'conceptual_soundness',
          'data_validation',
          'replication',
          'challenger',
          'sensitivity_analysis',
          'documentation',
          'implementation_review',
        ])
      )
      .optional(),
    leadValidatorId: z.string().optional(),
    unitCost: z
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
    cycleTimeDays: z.number().optional(),
  })
  .passthrough();
const ValidationEngagementListData = z
  .object({
    items: z.array(
      z
        .object({
          id: z.string(),
          modelId: z.string(),
          slotId: z.string().optional(),
          tier: z.number().int(),
          status: z.enum(['planned', 'in_progress', 'completed', 'aborted']),
          playbookSteps: z
            .array(
              z.enum([
                'conceptual_soundness',
                'data_validation',
                'replication',
                'challenger',
                'sensitivity_analysis',
                'documentation',
                'implementation_review',
              ])
            )
            .optional(),
          leadValidatorId: z.string().optional(),
          unitCost: z
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
          cycleTimeDays: z.number().optional(),
        })
        .passthrough()
    ),
  })
  .passthrough();
const ValidationEngagementListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string(),
              modelId: z.string(),
              slotId: z.string().optional(),
              tier: z.number().int(),
              status: z.enum([
                'planned',
                'in_progress',
                'completed',
                'aborted',
              ]),
              playbookSteps: z
                .array(
                  z.enum([
                    'conceptual_soundness',
                    'data_validation',
                    'replication',
                    'challenger',
                    'sensitivity_analysis',
                    'documentation',
                    'implementation_review',
                  ])
                )
                .optional(),
              leadValidatorId: z.string().optional(),
              unitCost: z
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
              cycleTimeDays: z.number().optional(),
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
const ValidationEngagementCreate = z
  .object({
    modelId: z.string(),
    slotId: z.string(),
    leadValidatorId: z.string(),
  })
  .passthrough();
const ValidationEngagementResponse = z
  .object({
    data: z
      .object({
        id: z.string(),
        modelId: z.string(),
        slotId: z.string().optional(),
        tier: z.number().int(),
        status: z.enum(['planned', 'in_progress', 'completed', 'aborted']),
        playbookSteps: z
          .array(
            z.enum([
              'conceptual_soundness',
              'data_validation',
              'replication',
              'challenger',
              'sensitivity_analysis',
              'documentation',
              'implementation_review',
            ])
          )
          .optional(),
        leadValidatorId: z.string().optional(),
        unitCost: z
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
        cycleTimeDays: z.number().optional(),
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
const ValidationTask = z
  .object({
    id: z.string(),
    engagementId: z.string(),
    taskType: z.enum([
      'data_quality',
      'standardised_testing',
      'replication',
      'sensitivity_analysis',
      'initial_documentation',
      'monitoring_review',
      'conceptual_soundness',
      'challenger_construction',
      'implementation_review',
    ]),
    placement: z.enum(['onshore', 'offshore', 'external']),
    dataSensitivityBasis: z
      .enum(['full', 'masked', 'sampled', 'synthetic'])
      .optional(),
    status: z.enum(['queued', 'in_progress', 'completed', 'blocked']),
    effortHours: z.number().optional(),
    unitCost: z
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
const ValidationTaskListData = z
  .object({
    items: z.array(
      z
        .object({
          id: z.string(),
          engagementId: z.string(),
          taskType: z.enum([
            'data_quality',
            'standardised_testing',
            'replication',
            'sensitivity_analysis',
            'initial_documentation',
            'monitoring_review',
            'conceptual_soundness',
            'challenger_construction',
            'implementation_review',
          ]),
          placement: z.enum(['onshore', 'offshore', 'external']),
          dataSensitivityBasis: z
            .enum(['full', 'masked', 'sampled', 'synthetic'])
            .optional(),
          status: z.enum(['queued', 'in_progress', 'completed', 'blocked']),
          effortHours: z.number().optional(),
          unitCost: z
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
const ValidationTaskListResponse = z
  .object({
    data: z
      .object({
        items: z.array(
          z
            .object({
              id: z.string(),
              engagementId: z.string(),
              taskType: z.enum([
                'data_quality',
                'standardised_testing',
                'replication',
                'sensitivity_analysis',
                'initial_documentation',
                'monitoring_review',
                'conceptual_soundness',
                'challenger_construction',
                'implementation_review',
              ]),
              placement: z.enum(['onshore', 'offshore', 'external']),
              dataSensitivityBasis: z
                .enum(['full', 'masked', 'sampled', 'synthetic'])
                .optional(),
              status: z.enum(['queued', 'in_progress', 'completed', 'blocked']),
              effortHours: z.number().optional(),
              unitCost: z
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
const ValidationTaskCreate = z
  .object({
    taskType: z.enum([
      'data_quality',
      'standardised_testing',
      'replication',
      'sensitivity_analysis',
      'initial_documentation',
      'monitoring_review',
      'conceptual_soundness',
      'challenger_construction',
      'implementation_review',
    ]),
    placement: z.enum(['onshore', 'offshore', 'external']),
    dataSensitivityBasis: z.enum(['full', 'masked', 'sampled', 'synthetic']),
    assigneeId: z.string().optional(),
  })
  .passthrough();
const ValidationTaskResponse = z
  .object({
    data: z
      .object({
        id: z.string(),
        engagementId: z.string(),
        taskType: z.enum([
          'data_quality',
          'standardised_testing',
          'replication',
          'sensitivity_analysis',
          'initial_documentation',
          'monitoring_review',
          'conceptual_soundness',
          'challenger_construction',
          'implementation_review',
        ]),
        placement: z.enum(['onshore', 'offshore', 'external']),
        dataSensitivityBasis: z
          .enum(['full', 'masked', 'sampled', 'synthetic'])
          .optional(),
        status: z.enum(['queued', 'in_progress', 'completed', 'blocked']),
        effortHours: z.number().optional(),
        unitCost: z
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
const CapacityForecast = z
  .object({
    horizonQuarters: z.number().int(),
    estateGrowthRate: z.number(),
    projectedModels: z.number().int(),
    availableValidatorFte: z.number(),
    committedCycleTimeByTier: z.record(z.number()),
    capacityGapModels: z.number().int(),
    costPerValidatedModel: z
      .object({
        amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
        currency: z
          .string()
          .min(3)
          .max(3)
          .regex(/^[A-Z]{3}$/),
      })
      .passthrough(),
  })
  .partial()
  .passthrough();
const CapacityForecastResponse = z
  .object({
    data: z
      .object({
        horizonQuarters: z.number().int(),
        estateGrowthRate: z.number(),
        projectedModels: z.number().int(),
        availableValidatorFte: z.number(),
        committedCycleTimeByTier: z.record(z.number()),
        capacityGapModels: z.number().int(),
        costPerValidatedModel: z
          .object({
            amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
            currency: z
              .string()
              .min(3)
              .max(3)
              .regex(/^[A-Z]{3}$/),
          })
          .passthrough(),
      })
      .partial()
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
  allocateValidationSlot_Body,
  createValidationEngagement_Body,
  placeValidationTask_Body,
  ValidationSlot,
  ValidationSlotListData,
  ResponseMeta,
  ValidationSlotListResponse,
  Problem,
  ValidationSlotAllocate,
  ValidationSlotResponse,
  Currency,
  Money,
  ValidationEngagement,
  ValidationEngagementListData,
  ValidationEngagementListResponse,
  ValidationEngagementCreate,
  ValidationEngagementResponse,
  ValidationTask,
  ValidationTaskListData,
  ValidationTaskListResponse,
  ValidationTaskCreate,
  ValidationTaskResponse,
  CapacityForecast,
  CapacityForecastResponse,
};

const endpoints = makeApi([
  {
    method: 'get',
    path: '/v1/validation/capacity-forecast',
    alias: 'getCapacityForecast',
    requestFormat: 'json',
    parameters: [
      {
        name: 'horizonQuarters',
        type: 'Query',
        schema: z.number().int().gte(1).lte(8).optional().default(4),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            horizonQuarters: z.number().int(),
            estateGrowthRate: z.number(),
            projectedModels: z.number().int(),
            availableValidatorFte: z.number(),
            committedCycleTimeByTier: z.record(z.number()),
            capacityGapModels: z.number().int(),
            costPerValidatedModel: z
              .object({
                amount: z.string().regex(/^-?\d+(\.\d{1,5})?$/),
                currency: z
                  .string()
                  .min(3)
                  .max(3)
                  .regex(/^[A-Z]{3}$/),
              })
              .passthrough(),
          })
          .partial()
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
    path: '/v1/validation/engagements',
    alias: 'listValidationEngagements',
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
        name: 'modelId',
        type: 'Query',
        schema: z.string().optional(),
      },
      {
        name: 'status',
        type: 'Query',
        schema: z
          .enum(['planned', 'in_progress', 'completed', 'aborted'])
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
                  modelId: z.string(),
                  slotId: z.string().optional(),
                  tier: z.number().int(),
                  status: z.enum([
                    'planned',
                    'in_progress',
                    'completed',
                    'aborted',
                  ]),
                  playbookSteps: z
                    .array(
                      z.enum([
                        'conceptual_soundness',
                        'data_validation',
                        'replication',
                        'challenger',
                        'sensitivity_analysis',
                        'documentation',
                        'implementation_review',
                      ])
                    )
                    .optional(),
                  leadValidatorId: z.string().optional(),
                  unitCost: z
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
                  cycleTimeDays: z.number().optional(),
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
    path: '/v1/validation/engagements',
    alias: 'createValidationEngagement',
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: createValidationEngagement_Body,
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            modelId: z.string(),
            slotId: z.string().optional(),
            tier: z.number().int(),
            status: z.enum(['planned', 'in_progress', 'completed', 'aborted']),
            playbookSteps: z
              .array(
                z.enum([
                  'conceptual_soundness',
                  'data_validation',
                  'replication',
                  'challenger',
                  'sensitivity_analysis',
                  'documentation',
                  'implementation_review',
                ])
              )
              .optional(),
            leadValidatorId: z.string().optional(),
            unitCost: z
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
            cycleTimeDays: z.number().optional(),
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
        status: 403,
        description: `Independence separation would be violated`,
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
    path: '/v1/validation/engagements/:engagementId/tasks',
    alias: 'listValidationTasks',
    requestFormat: 'json',
    parameters: [
      {
        name: 'engagementId',
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
                  engagementId: z.string(),
                  taskType: z.enum([
                    'data_quality',
                    'standardised_testing',
                    'replication',
                    'sensitivity_analysis',
                    'initial_documentation',
                    'monitoring_review',
                    'conceptual_soundness',
                    'challenger_construction',
                    'implementation_review',
                  ]),
                  placement: z.enum(['onshore', 'offshore', 'external']),
                  dataSensitivityBasis: z
                    .enum(['full', 'masked', 'sampled', 'synthetic'])
                    .optional(),
                  status: z.enum([
                    'queued',
                    'in_progress',
                    'completed',
                    'blocked',
                  ]),
                  effortHours: z.number().optional(),
                  unitCost: z
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
    path: '/v1/validation/engagements/:engagementId/tasks',
    alias: 'placeValidationTask',
    description: `Route a decomposable task onshore, offshore, or externally with a recorded data-sensitivity basis and unit cost.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: placeValidationTask_Body,
      },
      {
        name: 'engagementId',
        type: 'Path',
        schema: z.string(),
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            engagementId: z.string(),
            taskType: z.enum([
              'data_quality',
              'standardised_testing',
              'replication',
              'sensitivity_analysis',
              'initial_documentation',
              'monitoring_review',
              'conceptual_soundness',
              'challenger_construction',
              'implementation_review',
            ]),
            placement: z.enum(['onshore', 'offshore', 'external']),
            dataSensitivityBasis: z
              .enum(['full', 'masked', 'sampled', 'synthetic'])
              .optional(),
            status: z.enum(['queued', 'in_progress', 'completed', 'blocked']),
            effortHours: z.number().optional(),
            unitCost: z
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
    method: 'get',
    path: '/v1/validation/slots',
    alias: 'listValidationSlots',
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
        schema: z
          .enum(['open', 'allocated', 'deferred', 'released'])
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
                  submissionId: z.string().optional(),
                  modelId: z.string().optional(),
                  status: z.enum(['open', 'allocated', 'deferred', 'released']),
                  tier: z.number().int(),
                  scheduledStart: z
                    .string()
                    .datetime({ offset: true })
                    .optional(),
                  scheduledEnd: z
                    .string()
                    .datetime({ offset: true })
                    .optional(),
                  validatorId: z.string().optional(),
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
    path: '/v1/validation/slots',
    alias: 'allocateValidationSlot',
    description: `Allocate a slot only when the submission is accepted. Refuses allocation for gapped or returned submissions.`,
    requestFormat: 'json',
    parameters: [
      {
        name: 'body',
        type: 'Body',
        schema: allocateValidationSlot_Body,
      },
    ],
    response: z
      .object({
        data: z
          .object({
            id: z.string(),
            submissionId: z.string().optional(),
            modelId: z.string().optional(),
            status: z.enum(['open', 'allocated', 'deferred', 'released']),
            tier: z.number().int(),
            scheduledStart: z.string().datetime({ offset: true }).optional(),
            scheduledEnd: z.string().datetime({ offset: true }).optional(),
            validatorId: z.string().optional(),
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
        status: 409,
        description: `Submission not accepted or capacity unavailable`,
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
