import { Request, Response } from 'express';

import { orderService } from './order.service.js';

export const orderController = {
  // POST /orders
  async createOrder(req: Request, res: Response){
    const order = orderService.createOrder(req);
    res.status(201).json({
      status: 'success',
      data: order,
    });
  },
};
