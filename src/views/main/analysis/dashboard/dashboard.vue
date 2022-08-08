<template>
  <div class="dashboard">
    <!-- 1.顶部数据统计 -->
    <el-row :gutter="10">
      <template v-for="item in topPanelData" :key="item.title">
        <el-col :md="12" :lg="6" :xl="6">
          <statistical-panel :panelData="item" />
        </el-col>
      </template>
    </el-row>

    <!-- 2.中间图标 -->
    <el-row :gutter="10">
      <el-col :span="7">
        <tc-card :title="'分类商品数量(饼图)'">
          <pie-echart :piedata="categoryGoodsCount"></pie-echart>
        </tc-card>
      </el-col>
      <el-col :span="10">
        <tc-card :title="'不同城市商品销量'">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </tc-card>
      </el-col>
      <el-col :span="7">
        <tc-card :title="'分类商品数量(玫瑰图)'">
          <rose-echart :piedata="categoryGoodsCount"></rose-echart>
        </tc-card>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <tc-card :title="'分类商品的销量'">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </tc-card>
      </el-col>
      <el-col :span="12">
        <tc-card :title="'分类商品的收藏'">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </tc-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'

import TcCard from '@/base-ui/card'
import StatisticalPanel from '@/components/statistical-panel'
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from '@/components/page-echarts'

export default defineComponent({
  name: 'dashboard',
  components: {
    TcCard,
    PieEchart,
    RoseEchart,
    LineEchart,
    BarEchart,
    MapEchart,
    StatisticalPanel
  },
  setup() {
    //请求数据
    const store = useStore()
    store.dispatch('analysis/getDashboardDataAction')

    //获取数据
    const topPanelData = computed(() => store.state.analysis.topPanelDatas)
    const categoryGoodsCount = computed(() => {
      return store.state.analysis.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })
    const addressGoodsSale = computed(() => {
      return store.state.analysis.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })
    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []

      const categoryGoodsSale = store.state.analysis.categoryGoodsSale
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      }

      return { xLabels, values }
    })
    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []

      const categoryGoodsFavor = store.state.analysis.categoryGoodsFavor
      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }

      return { xLabels, values }
    })

    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale,
      topPanelData
    }
  }
})
</script>

<style scoped lang="less">
.dashboard {
  background-color: #f5f5f5;

  .content-row {
    margin-top: 20px;
  }
}
</style>
