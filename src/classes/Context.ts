import { ServiceApi } from './services/ServiceApi'
import { ServiceLoader } from './services/ServiceLoader'
export class Context {
  serviceApi: ServiceApi
  serviceLoader: ServiceLoader

  constructor() {
    this.serviceApi = new ServiceApi()
    this.serviceLoader = new ServiceLoader()
  }
}
