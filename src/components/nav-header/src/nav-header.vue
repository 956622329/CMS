<template>
  <div class="nav-header">
    <el-icon class="fold-menu" v-if="isFold" @click="handleFoldClick">
      <!-- <component :is="'Fold'"></component> -->
      <Fold />
    </el-icon>
    <el-icon class="fold-menu" v-if="!isFold" @click="handleFoldClick">
      <Expand />
    </el-icon>
    <div class="content">
      <tc-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import UserInfo from './user-info.vue'
import TcBreadcrumb from '@/base-ui/breadcrunmb'

import { useStore } from '@/store'
import { useRoute } from 'vue-router'

import { pathMapBreadcrumbs } from '@/utils/map-menus'

export default defineComponent({
  components: { UserInfo, TcBreadcrumb },
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    //面包屑数据
    const store = useStore()
    //store
    const userMenus = store.state.login.userMenus
    const breadcrumbs = computed(() => {
      //router
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return { isFold, handleFoldClick, breadcrumbs }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  // width: 100%;
  align-items: center;
  flex: 1;

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
