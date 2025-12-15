import { Request, Response } from 'express';

import { orderService } from '../../services/order.service.js';
import { CreateOrderInput } from './order.schema.js';

export const orderController = {
  // POST /orders
  async createOrder(req: Request<{}, {}, CreateOrderInput['body']>, res: Response) {
    await orderService.createOrder(req.body);
    res.status(201).json({
      status: 'success',
    });
  },
};
