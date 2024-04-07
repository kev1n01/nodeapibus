import {
    // DB_HOST,
    // DB_PORT,
    // DB_USER,
    // DB_PASSWORD,
    // DB_DATABASE,
    DB_URL
} from '../src/config.js'
import pg from 'pg'

export const pool = new pg.Pool({
    connectionString: DB_URL,
    ssl: true,
    
    // host: DB_HOST,
    // user: DB_USER,
    // password: DB_PASSWORD,
    // database: DB_DATABASE,
    // port: DB_PORT,
})
