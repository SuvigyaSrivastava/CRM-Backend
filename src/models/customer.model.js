import mongoose,{Schema} from 'mongoose';  

const customerSchema = new mongoose.Schema({
  username: { type: String, required: true},

  email: { type: String, required: true, },

  total_spend: { type: Number, default: 0 },
  
  visit: { type: Number, default: 0 },

  last_visit: { type: Date, default: Date.now }
});


const Customer = mongoose.model('Customer', customerSchema);
 export default Customer;

