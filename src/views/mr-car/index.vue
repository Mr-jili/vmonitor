<template>
  <div class="mr-car">
    <searchBar @dateList='handleDataList' @changePageNum="changeNumPage" :pagenum="count"  @paginNumber ="paginNo1"/>
    <Table @showDrawer="ishowDrawer" :data6="resultDate"/>
    <page class="page" @totalChange="handelChangeTotal" :total-count="totalNum" @searchChange="searchchange" :pageValue="num"/>
    <errModal ref="isShow"/>
  </div>
</template>

<script>
import searchBar from '@/components/searchBar/index'
import Table from '@/components/table/table'
import page from '@/components/page/pagination'
import errModal from '@/components/modal/err-modal'
export default {
  name: 'marCar',
  data () {
    return {
      resultDate: [],
      totalNum: 1,
      count: 1,
      searchchange: 1,
      num: 1
    }
  },
  components: {
    searchBar,
    Table,
    page,
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
    changeNumPage () {
      this.searchchange = 1
    },
    paginNo1: function (val) {
      this.num = val
    }
  }
}
</script>

<style lang="less" scoped>
.mr-car {
  h1 {
    height: 60px;
    display: flex;
    align-items: center;
  }
  .page {
    position: fixed;
    bottom: 80px;
    right: 80px;
  }
}
</style>
