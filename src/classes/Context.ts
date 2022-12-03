import { ServiceApi } from './services/ServiceApi'
import { ServiceLoader } from './services/ServiceLoader'
import { ServiceAlert } from './services/ServiceAlert'
export class Context {
  serviceApi: ServiceApi
  serviceLoader: ServiceLoader
  serviceAlert: ServiceAlert

  constructor() {
    this.serviceApi = new ServiceApi()
    this.serviceLoader = new ServiceLoader()
    this.serviceAlert = new ServiceAlert()
  }
}
