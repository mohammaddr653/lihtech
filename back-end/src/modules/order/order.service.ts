import sendEmail from '#src/mails/newOrder.js';
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
    let content = `
    <h2>مشتری جدیدی منتظر پاسخ شماست</h2>
    <ul>
      <li>نام : ${newOrder.name}</li>
      <li>شماره تلفن : ${newOrder.phone}</li>
      <li>یادداشت : ${newOrder.note}</li>

    </ul>
    `;
    sendEmail('سفارش جدیدی دارید', 'mohammaddr653@gmail.com', content);
    return newOrder;
  },
};
