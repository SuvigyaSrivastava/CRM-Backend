import Customer from '../models/customer.model.js';

// Create a new customer
 export const createCustomer = async (req, res) => {
  try {
    
    const { username, email } = req.body;
    console.log(req.body);

    const customer = new Customer({ username, email});
    await customer.save();
    console.log(customer);

    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

// Get all customers
 export const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    console.log(customers);
    res.status(200).json(customers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


