import pkg from 'pg';  
const { Pool } = pkg;

export const pool = new Pool({
  connectionString: process.env.SUPABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const setSchema = async () => {
    let schema;
    if (process.env.NODE_ENV === 'prod') {
      schema = process.env.DB_SCHEMA_PROD;
    } else if (process.env.NODE_ENV === 'stage' || process.env.NODE_ENV === 'test') {
      schema = process.env.DB_SCHEMA_TEST;
    }
  
    await pool.query(`SET search_path TO ${schema}, public;`);
  };

export const connectToDatabase = async () => {
  try {
    await pool.connect();
    console.log("Database connected successfully!");
    await setSchema();
    console.log("Schema was successfully set!");
  } catch (err) {
    console.error("Failed to connect to the database:", err);
    process.exit(1);
  }
};