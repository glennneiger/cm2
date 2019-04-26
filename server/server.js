const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

// our localhost port
const port = 4001

const app = express()

// our server instance
const server = http.createServer(app)

// This creates our socket using the instance of the server
const io = socketIO(server)

// This is what the socket.io syntax is like, we will work this later
io.on('connection', socket => {
  socket.broadcast.emit( 'GUEST_CONNECTED', 'a guest connected' );

  socket.on( 'chat message', ( msg ) => {
    socket.emit('my message', msg);
    socket.broadcast.emit( 'other message', msg );
  } );

  socket.on( 'disconnect', () => {
    socket.broadcast.emit( 'GUEST_DISCONNECTED', 'a guest disconnected' );
  } );
})

server.listen(port, () => console.log(`Listening on port ${port}`))