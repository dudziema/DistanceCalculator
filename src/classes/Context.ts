import { ServiceApi } from './services/ServiceApi'
import { ServiceLoader } from './services/ServiceLoader'
import { ServiceAllert } from './services/ServiceAllert'
export class Context {
  serviceApi: ServiceApi
  serviceLoader: ServiceLoader
  serviceAllert: ServiceAllert

  constructor() {
    this.serviceApi = new ServiceApi()
    this.serviceLoader = new ServiceLoader()
    this.serviceAllert = new ServiceAllert()
  }
}
