<template>
  <div class="user">
    <div class="search">
      <tc-form v-bind="searchFormConfig" v-model="formData">
        <template #header>
          <h1>高级检索</h1>
        </template>
        <template #footer>
          <div class="handle-btns">
            <el-button type="primary" icon="Refresh">重置</el-button>
            <el-button type="primary" icon="Search">搜索</el-button>
          </div>
        </template>
      </tc-form>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TcForm from '@/base-ui/form'

import { searchFormConfig } from './config/search.config'

export default defineComponent({
  components: { TcForm },
  name: 'user',
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })

    return { searchFormConfig, formData }
  }
})
</script>

<style scoped lang="less">
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
