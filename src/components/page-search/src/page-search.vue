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
          <el-button type="primary" icon="Search">搜索</el-button>
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
  setup(props) {
    //双向绑定的属性应该是由配置文件的field来决定
    //1.优化一：formdata中的属性应该动态决定
    const formItem = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItem) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    //2.优化二

    const handlerResetClick = () => {
      formData.value = formOriginData
    }

    return { formData, handlerResetClick }
  }
})
</script>

<style scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
