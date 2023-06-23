import express from 'express';
import pool from '../database/index.js';

const router = express.Router();

router.get('/items/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const connection = await pool.getConnection();
        const result = await connection.query('SELECT * FROM items WHERE id = ?', [id]);
        connection.end();
        res.json(result);
    } catch (error) {
        res.status(500).send('Error al obtener el item');
    }
});

export default router;
