import { shallowRef, ref, computed } from 'vue'

export class ServiceAllert {
  private _config: any
  private _isVisible: any
  constructor() {
    this._config = shallowRef([])
    this._isVisible = ref(false)
  }

  open(config: string[]) {
    this._isVisible.value = true
    this._config.value = config
    setTimeout(()=> this.close(), 5000)
  }

  close() {
    this._isVisible.value = false
    this._config.value = {}
  }

  get allertConfig() {
    return computed(() => this._config.value)
  }

  get isVisible() {
    return computed(() => this._isVisible.value)
  }
}
