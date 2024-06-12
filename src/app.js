import express from 'express';
import bodyParser from 'body-parser';
import customerRoutes from './routes/customer.route.js';
import orderRoutes from './routes/order.route.js';
import audienceRoutes from './routes/audience.route.js';
import campaignRoutes from './routes/campaign.route.js';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000',
    // if you're using cookies or sessions
  }));

app.use('/api/customer', customerRoutes);
app.use('/api/order', orderRoutes);
// app.use('/api/audience', audienceRoutes);
app.use('/api/campaign', campaignRoutes);

export { app };
