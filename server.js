require('dotenv').config();

const express = require('express');
const path = require('path');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const { sequelize } = require('./models');
const { rootRouter } = require('./routers');

const socketService = require('./services/socket.service');
// const chatbotService = require('./services/chatbot');

const app = express();

app.use(cors());
app.use(express.json());

// Static folder
const publicPathDirectory = path.join(__dirname, './public');
app.use(express.static(publicPathDirectory));

// API routes
app.use(['/api', '/api/v1'], rootRouter);

// Optional homepage
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Create HTTP server
const httpServer = http.createServer(app);

// Initialize Socket.io
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Socket connection
socketService.connection(io);

// Start server
const PORT = 3000;

httpServer.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`);

  try {
    await sequelize.authenticate();
    console.log('Connected to MySQL successfully.');

    // await chatbotService.initVectorStore();

  } catch (error) {
    console.error('Cannot connect to MySQL:', error);
  }
});