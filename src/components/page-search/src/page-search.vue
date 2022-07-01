<template>
  <div class="page-search">
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
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return { formData }
  }
})
</script>

<style scoped>
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
