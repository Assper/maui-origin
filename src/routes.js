import { config } from './config'
import { Controller } from './controller'

const controller = new Controller(config)
export const routes = [
  controller.host,
  controller.dev,
  controller.test,
  controller.live,
  controller.notFound
]
