<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handlerResetClick"
      @queryBtnClick="handleQueryClick"
    />
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="users"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'

import { usePageSearch } from '@/hooks/use-page-search'

export default defineComponent({
  components: { PageSearch, PageContent },
  name: 'user',
  setup() {
    const [pageContentRef, handlerResetClick, handleQueryClick] =
      usePageSearch()

    return {
      searchFormConfig,
      contentTableConfig,
      handlerResetClick,
      handleQueryClick,
      pageContentRef
    }
  }
})
</script>

<style scoped lang="less"></style>
