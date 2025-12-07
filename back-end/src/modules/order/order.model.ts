import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    note: { type: String },
  },
  { timestamps: true },
);
export default mongoose.model('Order', orderSchema);
