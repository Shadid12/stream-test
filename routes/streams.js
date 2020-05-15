const express = require('express')
const { protect } = require('../middleware/auth')

const {
  getStreams,
  getStream,
  createStream,
  updateStream,
  deleteStream
} = require('../controllers/streams');

const router = express.Router();

router
  .route('/')
  .get(getStreams)
  .post(protect, createStream);

router
  .route('/:id')
  .get(getStream)
  .put(updateStream)
  .delete(deleteStream);

module.exports = router;