import { Service } from './service'

export class Controller {
  constructor(config) {
    this.config = config
    this.service = new Service(config.urls)
  }

  notFound(req, res) {
    res.statusCode = 404
    res.end('Not Found')
  }

  env(envId, req, res, next) {
    const url = this.service.url(req)
    const template = this.service.getTemplateByEnv(envId, url)
    return template ? res.end(template) : next()
  }

  dev = (req, res, next) => {
    return this.env('dev', req, res, next)
  }

  test = (req, res, next) => {
    return this.env('test', req, res, next)
  }

  live = (req, res, next) => {
    return this.env('live', req, res, next)
  }

  host = (req, res, next) => {
    const url = this.service.url(req)
    const origin = `${this.config.envUrl}:${this.config.port}`

    if (url.origin !== origin) {
      res.writeHead(301, {
        Location: `${origin}${url.pathname}`
      })
      return res.end()
    }

    return next()
  }
}
