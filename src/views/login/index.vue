<template>
  <div class="login-pager">
    <Card style="width:350px" class="from-content">
      <p slot="title">欢迎登录</p>
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="user">
            <Input type="text" v-model="formInline.user" clearable placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem class="submit-but">
            <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formInline: {
        user: '13100000000',
        password: ''
      },
      ruleInline: {
        user: [
          { required: true, message: 'Please fill in the user name', trigger: 'blur' }
        ],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('登录成功!')
        } else {
          this.$Message.error('登录失败!')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login-pager {
  width: 100%;
  height: 100%;
  background: url('../../assets/images/login.jpg') no-repeat;
  background-position: right;
  background-size: cover;
  .from-content {
    background: #fff;
    position: absolute;
    right: 160px;
    top: 50%;
    transform: translateY(-60%);
    .submit-but {
      margin-bottom: 0;
      text-align: center;
      button {
        width: 100%;
      }
    }
  }
}
</style>
