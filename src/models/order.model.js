import mongoose,{Schema} from 'mongoose';

const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  username: { type: String, required: true },
  
  amount: { type: Number, required: true }
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
