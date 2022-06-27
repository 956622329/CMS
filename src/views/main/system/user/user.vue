<template>
  <div class="user">
    <div class="search">
      <tc-form v-bind="searchFormConfig" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TcForm from '@/base-ui/form'

import { searchFormConfig } from './config/search.config'

export default defineComponent({
  components: { TcForm },
  name: 'user',
  setup() {
    return { searchFormConfig }
  }
})
</script>

<style scoped></style>
