import type { z } from 'zod';

export function validateApiResponse<T>(schema: z.ZodType<T>, data: unknown) {
  return schema.safeParse(data);
}

export function formatValidationError(error: z.ZodError): string {
  return error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join('; ');
}
