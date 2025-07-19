import { z } from 'zod';

export const createFinanceSchema = z.array(
  z.object({
    date: z.string(),
    description: z.string(),
    total: z.string(),
    category: z.string(),
  }),
);

export const filterCategorySchema = z.object({
  category: z.string().optional(),
})
