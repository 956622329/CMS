<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!collapse" class="title">Vue3+TS</span>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      background-color="#0c2135"
      :collapse="collapse"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单可以展开的标题 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <!-- 内测版icon图标使用方法 -->
              <!-- <i v-if="item.icon" :class="item.icon"></i> -->
              <!-- 新版icon使用方法 -->
              <el-icon v-if="item.icon">
                <component :is="menuIconName(item.icon)"></component
              ></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历里面的item -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.id + ''">
                <template #title>
                  <el-icon v-if="subitem.icon">
                    <component :is="menuIconName(subitem.icon)"></component
                  ></el-icon>
                  <span>{{ subitem.name }}</span>
                </template>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else-if="item.type === 2">
          <!-- 一级菜单 -->
          <el-sub-menu :index="item.id + ''">
            <el-icon v-if="item.icon">
              <component :is="menuIconName(item.icon)"></component
            ></el-icon>
            <span>{{ item.name }}</span>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const menuIconName = (itemicon: string) => {
      //把item.icon的旧图标名称改成新图标名称，"el-icon-chat-line-round"=>"ChatLineRound"
      let str = ''
      itemicon
        .slice(8)
        .split('-')
        .forEach((item: string) => {
          str =
            str + item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase()
        })
      return str
    }

    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus)
    return { userMenus, menuIconName }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
