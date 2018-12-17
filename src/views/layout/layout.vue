<template>
  <div class="layout">
    <Navbar/>
    <Layout class="ivu-layout-has-sider">
      <sideBar/>
      <Layout>
        <mainApp/>
      </Layout>
    </Layout>
    <loading ref="loaderOut"/>
  </div>
</template>
<script>
import mainApp from './appMain'
import Navbar from './Navbar'
import sideBar from './components/sideBar'
import loading from '../../components/loading/loading'

export default {
  name: 'layout',
  components: {
    mainApp,
    Navbar,
    sideBar,
    loading
  },
  data () {
    return {
    }
  },
  methods: {
  }

}
</script>

<style scoped lang="less">
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
    .ivu-layout {
      height: 100%;
      background: rgb(235, 237, 241);
    }
  }
  .layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
</style>

<style>
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu), .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):hover, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu), .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu):hover {
  background: #2d8cf0;
  color: #fff;
}
.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu), .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title-active:not(.ivu-menu-submenu) {
  color: #fff;
}
#app .layout {
  border: none;
}
</style>
