import { template as defaultTemplate } from './templates/default'
import { template as adsAboveTemplate } from './templates/above'
import { template as adsBelowTemplate } from './templates/below'
import { template as adsBothTemplate } from './templates/both'

export class Service {
  constructor(urls) {
    this.envUrl = urls
  }

  geTemplate(envId, intId, ads, position) {
    if (ads === 'ads') {
      switch (position) {
        case 'above':
          return adsAboveTemplate(this.envUrl[envId], intId)
        case 'below':
          return adsBelowTemplate(this.envUrl[envId], intId)
        case 'both':
          return adsBothTemplate(this.envUrl[envId], intId)
      }
    }

    return defaultTemplate(this.envUrl[envId], intId)
  }

  getTemplateByEnv(env, url) {
    const [_, envId, intId, ads, position] = url.pathname.split('/')
    return env === envId && this.geTemplate(envId, intId, ads, position)
  }

  url(req) {
    return new URL(req.url, `http://${req.headers.host}`)
  }
}
