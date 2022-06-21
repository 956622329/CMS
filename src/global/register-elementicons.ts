import { App } from 'vue'
// import { Edit, Expand, Fold } from '@element-plus/icons-vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// const components = [Edit, Expand, Fold]

export default function (app: App): void {
  // for (const [key, component] of Object.entries(components)) {
  //   app.component(key, component)
  // }
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
