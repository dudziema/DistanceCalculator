import axios from 'axios'

const apiClient = axios.create({})

export class ServiceApi {
  endpoint: string
  
  constructor() {
    this.endpoint = 'https://api.distancematrix.ai/maps/api/distancematrix/json'
  }

  get(params: any) {
    return apiClient.get(this.endpoint, { params })
  }
}
