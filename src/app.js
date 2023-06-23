import express from 'express';
import itemsRouter from './routes/items.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', itemsRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
