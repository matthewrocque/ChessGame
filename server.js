const express = require('express');
const path = require('path');
const http = require('http');
const {Server} = require('socket.io')
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'chess.html'));
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0'
app.listen(PORT, HOST, () => {
    console.log(`Server is running at http://${HOST}:${PORT}`);
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});