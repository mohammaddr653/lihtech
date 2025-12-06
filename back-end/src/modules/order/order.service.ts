import { CreateOrderDto } from './order.types.js';
import { Request } from 'express';

export const orderService = {
  // Create order
  createOrder(req: Request) {
    const newOrder: CreateOrderDto = {
      name: req.body.name,
      phone: req.body.phone,
      note: req.body.note,
    };

    return newOrder;
  },
};
