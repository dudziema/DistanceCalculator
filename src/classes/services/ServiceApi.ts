import axios from 'axios'
import LocationParams from '@/types/LocationParams'

const apiClient = axios.create({})

export class ServiceApi {
  endpoint: string
  
  constructor() {
    this.endpoint = 'https://api.distancematrix.ai/maps/api/distancematrix/json'
  }

  get(params: LocationParams) {
    return apiClient.get(this.endpoint, { params })
  }
}
