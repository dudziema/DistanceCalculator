import { Ref, ref, computed } from 'vue'

export class ServiceLoader {
  private _isVisible: Ref<boolean>

  constructor() {
    this._isVisible = ref(false)
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
