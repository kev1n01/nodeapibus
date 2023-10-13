import { config } from "dotenv"

config()

const PORT = process.env.PORT
const DB_URL = process.env.DB_URL
// const DB_HOST = process.env.DB_HOST
// const DB_PORT = process.env.DB_PORT
// const DB_USER = process.env.DB_USER
// const DB_PASSWORD = process.env.DB_PASSWORD
// const DB_DATABASE = process.env.DB_DATABASE
export {
    PORT,
    DB_URL,
    // DB_HOST,
    // DB_PORT,
    // DB_USER,
    // DB_PASSWORD,
    // DB_DATABASE,
}