const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db')
const nms = require('./libs/media_server');

// Route files
const streams = require('./routes/streams')
const auth = require('./routes/auth')
const users = require('./routes/users')
const cors = require('cors')

// Load env vars
dotenv.config({ path: './config/config.env' })

const app = express()

// CORS
app.use(cors())

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());


connectDB()
// Mount routers
app.use('/api/v1/streams', streams)
app.use('/api/v1/auth', auth)
app.use('/api/v1/users', users)

const PORT = process.env.PORT || 5000

const server = app.listen(
  PORT,
  console.log(`Server running in on port ${PORT}`)
)

nms.run()

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`)
    // Close server & exit process
    server.close(() => process.exit(1))
})