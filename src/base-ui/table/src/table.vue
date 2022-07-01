<template>
  <div>
    <el-table :data="listData" border style="width: 100%">
      <template v-for="propItem of propList" :key="propItem.prop">
        <el-table-column align="center" v-bind="propItem">
          <template #default="scope">
            <el-button>{{ scope.row[propItem.prop] }}</el-button>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    listData: {
      type: Object,
      reuqired: true
    },
    propList: {
      type: Array,
      reuqired: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
