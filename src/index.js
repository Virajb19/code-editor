import express from "express"
import http from 'http'
import { Server } from 'socket.io'
const app = express()

const server = http.createServer(app)
const io = new Server(server)

const userSocketMap = {}

function getAllConnectedClients(roomId) {
    return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map((socketId) => {
        return {
            socketId,
            username: userSocketMap[socketId]
        }
    })
}

io.on('connection', (socket) => {
    console.log('socket connected', socket.id);

    socket.on('join', ({ roomId, username }) => {
           userSocketMap[socket.id] = username,
           socket.join(roomId)
        const clients = getAllConnectedClients(roomId)
        clients.forEach(({socketId}) => {
            io.to(socketId).emit('joined', {
                clients,
                username,
                socketId: socket.id
            })
        })
    })
})

app.get("/", (req, res) => res.send(`<h1>Hello world</h1>`))


server.listen(3000)
