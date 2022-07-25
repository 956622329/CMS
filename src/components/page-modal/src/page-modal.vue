<template>
  <div class="page-modal">
    <el-dialog
      v-model="dialogVisible"
      :title="modalTitle"
      width="30%"
      center
      destroy-on-close
    >
      <tc-form v-bind="modalConfig" v-model="formData"></tc-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from 'vue'
import TcForm from '@/base-ui/form'

import { useStore } from 'vuex'

export default defineComponent({
  components: {
    TcForm
  },
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const dialogVisible = ref(false)
    const formData = ref<any>({})
    const title = ref('')
    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems)
          formData.value[`${item.field}`] = newValue[`${item.field}`]
      }
    )

    //点击确定按钮的逻辑
    const store = useStore()
    const handleConfirmClick = () => {
      dialogVisible.value = false
      if (Object.keys(props.defaultInfo).length) {
        //编辑

        store.dispatch('system/editPageDataAction', {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id
        })
      } else {
        //新建
        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo }
        })
      }
    }
    //标题
    const modalTitle = computed(() => title.value + props.modalConfig.title)
    return { dialogVisible, formData, handleConfirmClick, modalTitle, title }
  }
})
</script>

<style scoped></style>
