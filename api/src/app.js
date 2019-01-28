import server from './server'
import database from './db'

server.listen()

const app = server.getApp()

export default server
