import mongoose from 'mongoose';
import connectDB from './db/config.js';
import express from 'express';
import dotenv from 'dotenv';
import { app } from './app.js';




dotenv.config(
    {
        path: './.env'
    }
)





connectDB()
.then(() => {
    
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
});

export default app;