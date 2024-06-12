// routes/audience.route.js
import express from 'express';
import Customer from '../models/customer.model.js';

const router = express.Router();

router.post('/size', async (req, res) => {
    try {
        const { rules } = req.body;
        let query = {};

        rules.forEach((rule) => {
            const value = rule.value;
            if (rule.operator === 'Greater or Equals') {
                query[rule.field] = { $gte: value };
            } else if (rule.operator === 'Equals') {
                query[rule.field] = value;
            } // Add other operators as needed
        });

        const audienceSize = await Customer.find(query).countDocuments();
        res.send({ size: audienceSize });
    } catch (error) {
        res.status(400).send(error);
    }
});

export default router;
