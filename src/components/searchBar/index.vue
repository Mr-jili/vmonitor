<template>
  <Row class="search-bar">
    <Col span="6">
      <span class="search-key">项目名称</span>
      <Input v-model="projectName" placeholder="项目名称" style="width: 240px" ref="projectItem"/>
    </Col>
    <Col span="6">
      <span class="search-key">IP地址</span>
      <Input v-model="IPaddress" placeholder="IP地址" style="width: 240px" ref="ipItem"/>
    </Col>
    <Col span="6">
      <span class="search-key">异常时间</span>
      <DatePicker type="date" placeholder="异常时间" style="width: 200px" format="yyyy-MM-dd" v-model="valueData" @on-change="valueData=$event"></DatePicker>
    </Col>
    <Col span="6" class="search-button">
      <Button type="primary" icon="ios-search" @click="handleClick()">搜索</Button>
    </Col>
  </Row>
</template>

<script>
export default {
  props: {
    pagenum: {
      type: Number,
      default: 1
    }
  },
  created () {
    this.listData(this.num)
  },
  data () {
    return {
      projectName: '',
      IPaddress: '',
      valueData: '',
      num: 1
    }
  },
  methods: {
    handleClick: function () {
      this.$emit('paginNumber', this.num)
      this.listData(this.num)
    },
    listData (no) {
      this.$axios.post('/monitor/exception/listexceptionpage',
        {
          project_name: this.projectName,
          server_ip: this.IPaddress,
          exception_time: this.valueData,
          page_no: no
        }
      ).then(res => {
        this.$emit('dateList', res.data)
      })
    }
  },
  watch: {
    pagenum: function (val, oldVal) {
      this.listData(val)
    }
  }
}
</script>

<style lang="less" scoped>
.search-bar {
  display: flex;
  align-items: center;
  height: 60px;
  background: #fff;
  margin-bottom: 10px;
  .search-key {
    font-size: 18px;
    font-family: "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    margin-right: 20px;
    vertical-align: middle;
  }
  .search-button {
    display: flex;
    justify-content: flex-end;
    button {
      margin-right: 20px;
    }
  }
}
</style>
