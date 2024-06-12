import express from 'express';
import {createOrder,getOrders} from '../controller/order.controller.js';

const router = express.Router();
router.post('/createorder', createOrder);
router.get('/listorders', getOrders);

export default router;
