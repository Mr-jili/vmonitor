<template>
  <Sider ref="side1" hide-trigger collapsible width="260" :collapsed-width="78" v-model="isCollapsed">
    <div class="icon-trans">
      <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
    </div>
    <Menu :active-name="$route.name" theme="dark" width="auto" :class="menuitemClasses">
      <MenuItem name="home" :to="{name:'home'}">
          <Icon type="ios-analytics" />
          <span>Mr_Car</span>
      </MenuItem>
    </Menu>
  </Sider>
</template>

<script>
export default {
  name: 'sideBar',
  props: {
    por: Array
  },
  data () {
    return {
      isCollapsed: false
    }
  },
  computed: {
    rotateIcon () {
      return [
        'menu-icon',
        this.isCollapsed ? '' : 'rotate-icon'
      ]
    },
    menuitemClasses () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  },
  methods: {
    collapsedSider () {
      this.$refs.side1.toggleCollapse()
    }
  }
}
</script>

<style lang="less" scoped>
.layout-logo-left{
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon{
  transition: all .3s;
}
.rotate-icon{
  transform: rotate(-90deg);
}
.menu-item span{
  display: inline-block;
  overflow: hidden;
  width: 100px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width .2s ease .2s;
}
.menu-item i{
  transform: translateX(0px);
  transition: font-size .2s ease, transform .2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span{
  width: 0px;
  transition: width .2s ease;
}
.collapsed-menu .ivu-menu-item {
  height: 49px;
  transition: height .2s ease;
}
.collapsed-menu i{
  transform: translateX(5px);
  transition: font-size .2s ease .2s, transform .2s ease .2s;
  vertical-align: middle;
  font-size: 22px;
}
.logo_img {
  text-align: center;
  padding-top: 5px;
  .icon {
    height: 40px;
  }
}
.menuitemClasses {
  color: #fff;
}
.ivu-layout-sider, .ivu-menu-dark {
  background: rgb(52, 55, 67)
}
.icon-trans, .ivu-menu-item {
  background: rgb(67, 72, 89);
  border-bottom: 1px solid #333;
}
.icon-trans {
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
</style>
