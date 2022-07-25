import { IForm } from '@/base-ui/form/types'
export const modalConfig: IForm = {
  itemStyle: {},
  colLayout: {
    span: 24
  },
  title: '角色',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '角色介绍',
      placeholder: '请输入角色介绍'
    }
  ]
}
