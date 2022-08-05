<template>
  <div class="page-search">
    <tc-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button type="primary" icon="Refresh" @click="handlerResetClick"
            >重置</el-button
          >
          <el-button type="primary" icon="Search" @click="handleQueryClick"
            >搜索</el-button
          >
        </div>
      </template>
    </tc-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TcForm from '@/base-ui/form'

export default defineComponent({
  components: { TcForm },
  props: {
    searchFormConfig: {
      type: Object,
      reuqired: true
    }
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(props, { emit }) {
    //双向绑定的属性应该是由配置文件的field来决定
    //1.优化一：formdata中的属性应该动态决定
    const formItem = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItem) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    //2.优化二:当用户点击重置
    const handlerResetClick = () => {
      // for (const key in formOriginData) {
      //   // 深拷贝
      //   formData.value[`${key}`] = formOriginData[key]
      // }
      formData.value = formOriginData
      emit('resetBtnClick')
    }

    //2.优化三：当用户点击搜索
    const handleQueryClick = () => {
      emit('queryBtnClick', formData.value)
    }
    return { formData, handlerResetClick, handleQueryClick }
  }
})
</script>

<style scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
