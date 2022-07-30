import { IForm } from '@/base-ui/form/types'
export const modalConfig: IForm = {
  itemStyle: {},
  title: '商品类别',
  colLayout: {
    span: 24
  },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '商品类别',
      placeholder: '请输入商品类别'
    }
  ]
}
