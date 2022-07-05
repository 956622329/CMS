<template>
  <div class="page-content">
    <tc-table :listData="listData" v-bind="contentTableConfig">
      <!-- header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary" size="medium">新建用户</el-button>
        <el-button icon="Refresh"></el-button>
      </template>

      <!--列中的插槽 -->
      <template #state="scope">
        <el-button
          plain
          size="small"
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler>
        <el-button icon="Edit" link type="primary" size="small">编辑</el-button>
        <el-button icon="Delete" link type="danger" size="small"
          >删除</el-button
        >
      </template>
    </tc-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

import TcTable from '@/base-ui/table'

export default defineComponent({
  components: { TcTable },
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      require: true
    }
  },
  setup(props) {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    // let listData
    // switch (props.pageName) {
    //   case 'users':
    //     listData = computed(() => store.state.system.userList)
    //     break
    //   case 'role':
    //     listData = computed(() => store.state.system.roleList)
    //     break
    // }
    const listData = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )

    // const userCount = computed(() => store.state.system.userCount)

    return { listData }
  }
})
</script>

<style scoped lang="less">
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
