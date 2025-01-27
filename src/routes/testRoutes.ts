import express from "express";
import { pool } from "../db/connection.js";

const testRoutes  = express.Router();

testRoutes.get("/", async (req, res) => {
    const result = await pool.query("SELECT * FROM test");
    res.status(200).json(result.rows)
});

export default testRoutes;
