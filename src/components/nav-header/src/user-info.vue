<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          :size="35"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        />
        <span>{{ name }}</span>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="CircleClose" @click="handleExitClick"
            >退出登录</el-dropdown-item
          >
          <el-dropdown-item icon="WarningFilled" divided
            >个人信息</el-dropdown-item
          >
          <el-dropdown-item icon="Unlock">修改密码</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'
import LocalCache from '@/utils/cache'
import { useRouter } from 'vue-router'
// import router from '@/router'

export default defineComponent({
  setup() {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.name)

    const router = useRouter()
    const handleExitClick = () => {
      LocalCache.removeCache('token')
      // LocalCache.removeCache('name')
      // LocalCache.removeCache('password')
      router.push('/main')
    }

    return { name, handleExitClick }
  }
})
</script>

<style scoped lang="less">
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>
