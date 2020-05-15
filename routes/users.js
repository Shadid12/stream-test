const express = require('express')
const { protect } = require('../middleware/auth')
const { updateUser } = require('../controllers/users')

const router = express.Router()

router
    .route('/')
    .post(protect, updateUser)

module.exports = router;