//编写好规则
export const rules = {
  name: [
    {
      required: true,
      message: '用户名是必传内容',
      trgger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5~10个字母或数字',
      trgger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码是必传内容',
      trgger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是3位以上个字母或数字组合',
      trgger: 'blur'
    }
  ],
  num: [
    {
      required: true,
      message: '手机号是必传内容',
      trgger: 'blur'
    },
    {
      pattern: /^[0-9]{11}$/,
      message: '手机号必须是11位数字',
      trgger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '请输入6位短信验证码',
      trgger: 'blur'
    },
    {
      message: '请输入6位短信验证码',
      trgger: 'blur'
    }
  ]
}
