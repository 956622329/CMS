<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'

import { ElForm } from 'element-plus'
import { defineComponent, reactive, ref } from 'vue'
import LocalCache from '@/utils/cache'

import { rules } from '../config/account-config'

export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      name: LocalCache.getCache('name') ?? '',
      password: LocalCache.getCache('password') ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (iskeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          //1.判断是否要记住密码
          if (iskeepPassword) {
            //本地缓存
            LocalCache.setCache('name', account.name)
            LocalCache.setCache('password', account.password)
          } else {
            LocalCache.removeCache('name')
            LocalCache.removeCache('password')
          }
          //开始验证登录
          store.dispatch('login/accountLoginAction', { ...account })
        } else {
          console.log('填写不规范')
        }
      })
    }

    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
