import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallbackTypeFn = (item?: any) => void

export function usePageModal(newCb?: CallbackTypeFn, editCb?: CallbackTypeFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handleNewData = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
      pageModalRef.value.title = '新增'
    }
    newCb && newCb()
  }
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
      pageModalRef.value.title = '编辑'
    }
    editCb && editCb(item)
  }
  return [pageModalRef, defaultInfo, handleNewData, handleEditData]
}
