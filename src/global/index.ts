import { App } from 'vue'
import registerElement from './register-element'
import registerElementicons from './register-elementicons'
import registerProperties from './registerProperties'

export function globalRegister(app: App): void {
  // registerElement(app)
  app.use(registerElement)
  app.use(registerElementicons)
  app.use(registerProperties)
}
