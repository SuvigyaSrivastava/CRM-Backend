
import express from 'express';
import {createCustomer, getCustomers} from '../controller/customer.controller.js';


const router = express.Router();
router.post('/create', createCustomer);
router.get('/list', getCustomers);

export default router;