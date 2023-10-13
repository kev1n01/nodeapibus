import express from 'express'
import cors from 'cors'
import driverRoutes from './routes/drivers.routes.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', driverRoutes)
app.use((req, res, next) => {
    res.status(400).json({
        message: "endpoint not found"
    })
})

export default app