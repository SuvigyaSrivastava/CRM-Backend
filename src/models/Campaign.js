import mongoose from 'mongoose';

const campaignSchema = new mongoose.Schema({
    name: { type: String, required: true },
    message: { type: String},
    rules: { type: Array, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Campaign = mongoose.model('Campaign', campaignSchema);
export default Campaign;
