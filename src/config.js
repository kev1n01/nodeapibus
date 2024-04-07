import { config } from "dotenv"

config()

const PORT = process.env.PORT
const DB_URL = process.env.DB_URL
const API_KEY_RESEND = process.env.API_KEY_RESEND
const MAIL_TO= process.env.MAIL_TO
// const DB_HOST = process.env.DB_HOST
// const DB_PORT = process.env.DB_PORT
// const DB_USER = process.env.DB_USER
// const DB_PASSWORD = process.env.DB_PASSWORD
// const DB_DATABASE = process.env.DB_DATABASE
export {
    PORT,
    DB_URL,
    API_KEY_RESEND,
    MAIL_TO
    // DB_HOST,
    // DB_PORT,
    // DB_USER,
    // DB_PASSWORD,
    // DB_DATABASE,
}