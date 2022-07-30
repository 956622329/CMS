import { IForm } from '@/base-ui/form/types'
export const modalConfig: IForm = {
  itemStyle: {},
  title: '部门',
  colLayout: {
    span: 24
  },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '部门名称',
      placeholder: '请输入部门名称'
    },
    {
      field: 'leader',
      type: 'input',
      label: '部门领导',
      placeholder: '请输入部门领导'
    },
    {
      field: 'parentId',
      type: 'input',
      label: '上级部门',
      placeholder: '请输入上级部门'
    }
  ]
}
