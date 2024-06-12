// routes/campaign.route.js
import express from 'express';
import Campaign from '../models/Campaign.js';
import Customer from '../models/customer.model.js';
import CommunicationLog from '../models/CommunicationLog.js';

const router = express.Router();

// Create a new campaign
router.post('/create', async (req, res) => {
    try {
        const campaign = new Campaign(req.body);
        await campaign.save();
        res.status(201).send(campaign);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Send campaign
router.post('/send/:id', async (req, res) => {
    try {
        const campaign = await Campaign.findById(req.params.id);
        if (!campaign) {
            return res.status(404).send('Campaign not found');
        }

        const { rules } = campaign;
        let query = {};

        rules.forEach((rule) => {
            const value = rule.value;
            if (rule.operator === 'Greater or Equals') {
                query[rule.field] = { $gte: value };
            } else if (rule.operator === 'Equals') {
                query[rule.field] = value;
            } // Add other operators as needed
        });

        const customers = await Customer.find(query);

        const logs = await Promise.all(customers.map(async (customer) => {
            const status = Math.random() > 0.1 ? 'SENT' : 'FAILED'; // 90% SENT, 10% FAILED
            const message = `Hi ${customer.name}, ${campaign.message}`;
            const log = new CommunicationLog({
                campaignId: campaign._id,
                customerId: customer._id,
                message,
                status
            });
            await log.save();
            return log;
        }));

        res.send(logs);
    } catch (error) {
        res.status(500).send(error);
    }
});

export default router;
