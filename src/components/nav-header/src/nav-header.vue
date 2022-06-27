<template>
  <div class="nav-header">
    <el-icon class="fold-menu" v-if="isFold" @click="handleFoldClick">
      <component :is="'Expand'"></component
    ></el-icon>
    <el-icon class="fold-menu" v-if="!isFold" @click="handleFoldClick"
      ><Fold
    /></el-icon>
    <div class="content">
      <tc-breadcrumb />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UserInfo from './user-info.vue'
import TcBreadcrumb from '@/base-ui/breadcrunmb'

export default defineComponent({
  components: { UserInfo, TcBreadcrumb },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    return { isFold, handleFoldClick }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
