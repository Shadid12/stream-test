const express = require('express')
const { protect } = require('../middleware/auth')
const { updateUser, getStreamKey } = require('../controllers/users')

const router = express.Router()

router
    .route('/')
    .post(protect, updateUser)

router
    .route('/key')
    .get(protect, getStreamKey)

module.exports = router;