// Need to run npm i pg and npm i --save-dev @types/pg
import { Pool } from 'pg';

let conn: any;

if (!conn) {
  conn = new Pool({
    user: process.env.PGSQL_USER,
    password: process.env.PGSQL_PASSWORD,
    host: process.env.PGSQL_HOST,
    database: process.env.PGSQL_DATABASE,
    ssl: true
  });
}

// Graceful shutdown: Close the connection pool when the application is shutting down
process.on('beforeExit', async () => {
  console.log('Closing PostgreSQL connection pool...');
  await conn.end();
  console.log('PostgreSQL connection pool closed.');
});

export { conn };