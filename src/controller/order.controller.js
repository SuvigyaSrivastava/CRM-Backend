import  Order from '../models/order.model.js';
import Customer from '../models/customer.model.js'


// Create a new order
 export const createOrder = async (req, res) => {
  try {
    const { customerId, username,amount } = req.body;

    // Verify customer exists
    const customer = await Customer.findById(customerId);
    console.log(customer);
    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    const order = new Order({ customerId, username ,amount});
    await order.save();
    console.log(order);

    customer.total_spend += amount;
    await customer.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all orders
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('customer', 'username email');
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

