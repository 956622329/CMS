<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" :stretch="true">
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <login-account></login-account>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox>记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPhone from './login-phone.vue'
import LoginAccount from './login.account.vue'

export default defineComponent({
  components: {
    LoginPhone,
    LoginAccount
  },
  setup() {
    // const keepPassword = ref()
    return {}
  }
})
</script>

<style scoped lang="less">
.login-panel {
  margin-bottom: 250px;
  width: 320px;
  .title {
    text-align: center;
  }
}
.account-control {
  display: flex;
  justify-content: space-between;
}
</style>
