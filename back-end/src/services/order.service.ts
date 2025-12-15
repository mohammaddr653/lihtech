import sendEmail from '#src/mails/newOrder.js';
import Order from '../models/order.model.js';
import { CreateOrderDto } from '../types/order.types.js';

export const orderService = {
  // Create order
  async createOrder(data: CreateOrderDto) {
    const newOrder: CreateOrderDto = {
      name: data.name,
      phone: data.phone,
      note: data.note,
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
