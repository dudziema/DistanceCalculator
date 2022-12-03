import { inject } from 'vue'
import { Context } from '@/classes/Context'

const injectionKey = Symbol('context')

export function createContext() {
  const context = new Context()

  return { injectionKey, context }
}

export function useContext() {
  const context = inject(injectionKey)
  if (!context) throw Error('fatal error: Context not provided!')
  
  return context
}
