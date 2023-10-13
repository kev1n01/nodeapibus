import express from 'express'
import driverRoutes from './routes/drivers.routes.js'

const app = express()
app.use(express.json())
app.use('/api', driverRoutes)
app.use((req, res, next) => {
    res.status(400).json({
        message: "endpoint not found"
    })
})

export default app