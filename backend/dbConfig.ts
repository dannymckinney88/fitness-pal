import { Pool } from 'pg';
import { config } from 'dotenv';

// Initialize configuration from your .env file
config();


// Create a new pool instance with TypeScript type annotations
console.log(process.env.PASSWORD);
const pool: Pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.NAME,
  password: process.env.PASSWORD,
  port: parseInt(process.env.PORT || '5432', 10), // Ensure the port is a number
});
// Export the pool instance
export default pool;

