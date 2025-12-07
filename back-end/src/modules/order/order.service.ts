import sendEmail from '#src/mails/newOrder.js';
import Order from './order.model.js';
import { CreateOrderDto } from './order.types.js';
import { Request } from 'express';

export const orderService = {
  // Create order
  async createOrder(req: Request) {
    const newOrder: CreateOrderDto = {
      name: req.body.name,
      phone: req.body.phone,
      note: req.body.note,
    };
    const saveOp = await Order.create(newOrder);
    let content = `
    <div dir="rtl">
      <h2>مشتری جدیدی منتظر پاسخ شماست</h2>
      <ul style="display:grid;grid-template-column:1;gap:5px;padding:10px;border:1px solid #eee;">
        <li>شناسه سفارش : ${saveOp._id}</li>
        <li>نام : ${saveOp.name}</li>
        <li>شماره تلفن : ${saveOp.phone}</li>
        <li>یادداشت : ${saveOp.note}</li>
        <li>تاریخ ثبت سفارش : ${saveOp.createdAt}</li>
      </ul>
    </div>
    `;
    sendEmail('سفارش جدیدی دارید', 'mohammaddr653@gmail.com', content);
    return saveOp;
  },
};
