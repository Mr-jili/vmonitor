<template>
  <Header :style="{padding: 0}" class="layout-header-bar">
    <div class="login-png">
      <img :src="logoSrc" alt="">
    </div>
    <Dropdown trigger="click" style="margin-left: 20px">
      <a href="javascript:void(0)">
        <div class="demo-avatar">
          <Avatar size="large" :src="userSrc" />
        </div>
        <Icon type="ios-arrow-down"></Icon>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem>修改密码</DropdownItem>
        <DropdownItem>登出系统</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </Header>
</template>

<script>
import logoSrc from '@/assets/images/logo.png'
import userSrc from '@/assets/images/user.jpg'
export default {
  name: 'navBar',
  data () {
    return {
      logoSrc,
      userSrc
    }
  }
}
</script>

<style lang="less" scoped>
.layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    .login-png {
      width: 144px;
      height: 36px;
      padding-top: 15px;
      margin-left: 30px;
    }
    .ivu-dropdown {
      position: absolute;
      right: 20px;
      top: 0px;
      .demo-avatar {
        display: inline-block;
        margin-right: 5px;
      }
    }
}
</style>
