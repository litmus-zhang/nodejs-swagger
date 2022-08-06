const router = require('express').Router()

const { route } = require('./students.js')
const studentRoutes = require('./students.js')

router.use('/api', studentRoutes)

module.exports = router