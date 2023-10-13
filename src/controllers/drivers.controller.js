import { pool } from "../db.js"

const getDrivers = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM driver')
        res.json(rows)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

const getDriver = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM driver WHERE id = ?', [req.params.id])
        if (rows.length <= 0) return res.status(400).json({
            message: 'Driver not found'
        })
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

const createDriver = async (req, res) => {
    const alias = req.body.alias
    try {
        const [rows] = await pool.query('INSERT INTO driver (alias) VALUES (?)', [alias])
        res.send({
            id: rows.insertId,
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
    const { lat, lng } = req.body
    try {
        const [result] = await pool.query('UPDATE driver SET lat = ?, lng = ? WHERE id = ?', [lat, lng, id])
        if (result.affectedRows === 0) return res.status(404).json({
            message: 'Driver not found'
        })
        const [rows] = await pool.query('SELECT * FROM driver WHERE id = ?', [id])
        res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

const deleteDriver = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM driver WHERE id = ?', [req.params.id])
        if (result.affectedRows <= 0) return res.status(400).json({
            message: 'Driver not found'
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'
        })
    }
}

export { getDrivers, getDriver, createDriver, updateDriver, deleteDriver }