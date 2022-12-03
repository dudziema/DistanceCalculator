import { ServiceApi } from './services/ServiceApi'

export class Context {
  serviceApi: ServiceApi
  constructor() {
    this.serviceApi = new ServiceApi()
  }
}
