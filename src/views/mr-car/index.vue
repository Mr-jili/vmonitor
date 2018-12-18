<template>
  <div class="mr-car">
    <searchBar @dateList='handleDataList' @changePageNum="changeNumPage" :pagenum="count"  @paginNumber ="paginNo1" :pageSizeSearch="pageSize"/>
    <Table @showDrawer="ishowDrawer" :data6="resultDate"/>
    <Page class="page" v-show="totalNum > 10?true:false" :total="totalNum" :page-size="pageSize" :current.sync="num" :show-sizer="true" :show-elevat="true" show-elevator @on-change="handleTotalChange" @on-page-size-change="pageSizeChange"/>
    <errModal ref="isShow"/>
  </div>
</template>

<script>
import searchBar from '@/components/searchBar/index'
import Table from '@/components/table/table'
import errModal from '@/components/modal/err-modal'
export default {
  name: 'marCar',
  data () {
    return {
      resultDate: [],
      totalNum: 0,
      count: 1,
      searchchange: 1,
      num: 1,
      pageSize: 10
    }
  },
  components: {
    searchBar,
    Table,
    errModal
  },
  methods: {
    ishowDrawer (index) {
      this.$refs.isShow.draerShow(index)
    },
    handleDataList (data) {
      if (data.result_code === 0) {
        this.resultDate = data.result_list
        this.totalNum = data.total_count
      } else if (data.result_code === 1) {
        this.$Message.error(data.result_msg)
      }
    },
    handelChangeTotal (data) {
      console.log(data)
      this.count = data
    },
    pageSizeChange (val) {
      this.pageSize = val
    },
    changeNumPage () {
      this.searchchange = 1
    },
    paginNo1: function (val) {
      this.num = val
    },
    handleTotalChange (value) {
      console.log(value)
      this.count = value
    }
  }
}
</script>

<style lang="less" scoped>
.mr-car {
  height: 100%;
  h1 {
    height: 60px;
    display: flex;
    align-items: center;
  }
  .page {
    height: 150px;
    padding: 30px 20px 18px 0px;
    text-align: right;
  }
}
</style>
