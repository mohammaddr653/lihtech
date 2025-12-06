import { Router } from 'express';
import { orderController } from './order.controller.js';
import { validate } from '#src/middlewares/validate.js';
import { createOrderSchema } from './order.schema.js';

const router = Router();

router.post('/v1/orders/', validate(createOrderSchema), orderController.createOrder);

export default router;
