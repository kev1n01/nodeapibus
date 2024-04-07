import { pool } from "../db.js"

const getDrivers = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM drivers WHERE lat IS NOT NULL AND lng IS NOT NULL AND speed IS NOT NULL')
        res.status(200).json({
            data: response.rows
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong ctmre'
        })
    }
}

const getDriver = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM drivers WHERE id = $1', [req.params.id])
        if (response.rows.length <= 0) return res.status(400).json({ message: 'Driver not found' })
        res.status(200).json(response.rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

const createDriver = async (req, res) => {
    try {
        const alias = req.body.alias
        const rows = await pool.query('INSERT INTO drivers (alias) VALUES ($1)', [alias])
        const driver_created = await pool.query('SELECT id FROM drivers WHERE alias = $1', [alias])
        const id_driver = driver_created.rows[0]
        res.status(200).json({
            id: id_driver.id,
            alias,
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

const updateDriver = async (req, res) => {
    const { id } = req.params
    const { lat, lng, speed } = req.body
    try {
        const response = await pool.query('UPDATE drivers SET lat = $1, lng = $2, speed = $3 WHERE id = $4', [lat, lng, speed, id])
        if (response.rowCount === 0) return res.status(404).json({
            message: 'Driver not found'
        })
        const driver = await pool.query('SELECT * FROM drivers WHERE id = $1', [id])
        res.status(200).json({
            message: 'Driver updated',
            driver: driver.rows
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

const deleteDriver = async (req, res) => {
    try {
        const response = await pool.query('DELETE FROM drivers WHERE id = $1', [req.params.id])
        if (response.rowCount === 0) return res.status(400).json({
            message: 'Driver not found'
        })

        res.status(200).json({
            message: 'Driver deleted'
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export { getDrivers, getDriver, createDriver, updateDriver, deleteDriver }