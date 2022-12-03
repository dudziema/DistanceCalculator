import { ShallowRef, shallowRef, computed } from 'vue'

export class ServiceLoader {
  private _isVisible: ShallowRef<boolean>

  constructor() {
    this._isVisible = shallowRef(false)
  }

  show() {
    this._isVisible.value = true
  }

  hide() {
    this._isVisible.value = false
  }

  get isVisible() {
    return computed(() => this._isVisible.value)
  }
}
