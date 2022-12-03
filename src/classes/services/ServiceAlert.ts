import { shallowRef, ShallowRef, ref, Ref, computed } from 'vue'

export class ServiceAlert {
  private _config: ShallowRef<string[]>
  private _isVisible: ShallowRef<boolean>
  constructor() {
    this._config = shallowRef([])
    this._isVisible = shallowRef(false)
  }

  open(config: string[]) {
    this._isVisible.value = true
    this._config.value = config
    setTimeout(()=> this.close(), 5000)
  }

  close() {
    this._isVisible.value = false
    this._config.value = []
  }

  get alertConfig() {
    return computed(() => this._config.value)
  }

  get isVisible() {
    return computed(() => this._isVisible.value)
  }
}
