<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" :stretch="true" v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="iskeepPassword" :disabled="!keepPassword">
        记住密码
      </el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginClick">
      立即登录
    </el-button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import LoginAccount from './login.account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    LoginPhone,
    LoginAccount
  },
  setup() {
    //定义属性
    const iskeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()
    const currentTab = ref('account')

    const keepPassword = computed(() => currentTab.value === 'account') //手机无须记住密码，禁用选框
    //定义方法
    const handleLoginClick = () => {
      if (currentTab.value === 'account') {
        // console.log('立即登录')
        accountRef.value?.loginAction(iskeepPassword.value)
      } else {
        console.log('phoneRef调用loginaction')
      }
    }

    return {
      iskeepPassword,
      handleLoginClick,
      accountRef,
      currentTab,
      phoneRef,
      keepPassword
    }
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
.login-btn {
  width: 100%;
  margin-top: 10px;
}
</style>
