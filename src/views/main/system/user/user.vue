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
    <page-modal :modalConfig="modalConfig" :formData="formData" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search.config'
import { contentTableConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

import { usePageSearch } from '@/hooks/use-page-search'

export default defineComponent({
  components: { PageSearch, PageContent, PageModal },
  name: 'user',
  setup() {
    const [pageContentRef, handlerResetClick, handleQueryClick] =
      usePageSearch()

    return {
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      handlerResetClick,
      handleQueryClick,
      pageContentRef
    }
  }
})
</script>

<style scoped lang="less"></style>
