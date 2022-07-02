import { App } from 'vue'
//按需导入需要的icon图标
import {
  Expand,
  Fold,
  Monitor,
  Setting,
  Goods,
  ChatLineRound,
  ArrowDown,
  CircleClose,
  UserFilled,
  Refresh,
  Search,
  Edit,
  Delete
} from '@element-plus/icons-vue'

const components = [
  Expand,
  Fold,
  Monitor,
  Setting,
  Goods,
  ChatLineRound,
  ArrowDown,
  CircleClose,
  UserFilled,
  Refresh,
  Search,
  Edit,
  Delete
]

export default function (app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
