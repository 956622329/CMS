<template>
  <div class="user">
    <div class="search"></div>
    <page-search :searchFormConfig="searchFormConfig" />
    <div class="content">
      <tc-table
        :listData="userList"
        :propList="propList"
        :showIndexColumn="showIndexColumn"
        :showSelectColumn="showSelectColumn"
      >
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
          <el-button icon="Edit" link type="primary" size="small"
            >编辑</el-button
          >
          <el-button icon="Delete" link type="danger" size="small"
            >删除</el-button
          >
        </template>
      </tc-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

import PageSearch from '@/components/page-search'
import TcTable from '@/base-ui/table'

import { searchFormConfig } from './config/search.config'

export default defineComponent({
  components: { PageSearch, TcTable },
  name: 'user',
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const userList = computed(() => store.state.system.userList)

    const userCount = computed(() => store.state.system.userCount)

    const propList = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '电话号码', minWidth: '100' },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'state' },
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
    ]

    const showIndexColumn = true
    const showSelectColumn = true

    return {
      searchFormConfig,
      userList,
      userCount,
      propList,
      TcTable,
      showIndexColumn,
      showSelectColumn
    }
  }
})
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>