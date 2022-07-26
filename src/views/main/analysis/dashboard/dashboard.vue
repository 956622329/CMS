<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <tc-card :title="'分类商品数量(饼图)'">
          <pie-echart></pie-echart>
        </tc-card>
      </el-col>
      <el-col :span="10">
        <tc-card :title="'不同城市商品销量'"></tc-card>
      </el-col>
      <el-col :span="7">
        <tc-card :title="'分类商品数量(玫瑰图)'"></tc-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <tc-card :title="'分类商品的销量'"> </tc-card>
      </el-col>
      <el-col :span="12">
        <tc-card :title="'分类商品的收藏'"></tc-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

import TcCard from '@/base-ui/card'
import { PieEchart } from '@/components/page-echarts'

export default defineComponent({
  name: 'dashboard',
  components: {
    TcCard,
    PieEchart
  },
  setup() {
    const store = useStore()
    store.dispatch('dasboard/getDasboardDataAction')

    return {}
  }
})
</script>

<style scoped lang="less">
.content-row {
  margin-top: 20px;
}
</style>
