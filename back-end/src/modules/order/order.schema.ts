import { z } from 'zod';

export const createOrderSchema = z.object({
  body: z.object({
    name: z.string().min(2, 'نام حداقل باید 2 کارکتر باشد').max(50),
    phone: z.string().min(10, 'شماره تلفن حداقل باید 10 رقم باشد').max(13),
    note: z.string().max(500),
  }),
});

export type CreateOrderInput = z.infer<typeof createOrderSchema>;
