import http from 'http'

export class Server {
  constructor(config) {
    this.config = config
    this.chain = []
  }

  *generator() {
    yield* this.chain
  }

  use(middleware) {
    const middlewares = Array.isArray(middleware) ? middleware : [middleware]
    this.chain.push(...middlewares)
  }

  requestHandler(req, res) {
    const gen = this.generator()
    let handler = gen.next()
    while (handler && typeof handler.value === 'function') {
      handler = handler.value(req, res, gen.next.bind(gen))
    }
  }

  listen(cb) {
    const server = http.createServer(this.requestHandler.bind(this))
    server.listen(this.config.port, cb)
  }
}
