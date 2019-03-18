const CaressServer = require('caress-server')
const caress = new CaressServer('0.0.0.0', 3333, {json: true})

const io = require('socket.io')(5000)

io.on('connection', (client) => {
  console.log('Client connected', client.id)

  client.on('disconnect', (msg) => {
    console.log('Client', client.id , 'disconnected:', msg)
  })
})

caress.on('tuio', (msg) => {
  io.emit('tuio', msg)
})
