import { config } from './config'
import { Server } from './server'
import { routes } from './routes'

const server = new Server(config)
server.use(routes)
server.listen((err) => {
  if (err) console.error(err)
  console.log(`start on: ${config.envUrl}:${config.port}`)
})
