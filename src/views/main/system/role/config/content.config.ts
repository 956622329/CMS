export const contentTableConfig = {
  propList: [
    { prop: 'name', label: '人事', minWidth: '100' },
    { prop: 'intro', label: '人事管理', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '100',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '100',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '120',
      slotName: 'handler'
    }
  ],
  title: '用户列表',
  showIndexColumn: true,
  showSelectColumn: true
}
