<template>
  <div>
    <Modal
      v-model="modal1"
      title="异常信息查看"
      closable
      :styles="{top: '20px'}"
      >
      <div>
          <ul>
            <li>服务器IP：<span>{{result_modal.server_ip}}</span></li>
            <li>项目名称：<span>{{result_modal.project_name}}</span></li>
            <li>异常所属类：<span>{{result_modal.class_name}}</span></li>
            <li>异常所属方法：<span>{{result_modal.method_name}}</span></li>
            <li>异常时间：<span>{{result_modal.exception_time}}</span></li>
            <li>异常信息：<span>{{result_modal.exception}}</span></li>
          </ul>
      </div>
    </Modal>
  </div>
</template>
<script>
export default {
  data () {
    return {
      modal1: false,
      result_modal: []
    }
  },
  methods: {
    draerShow (index) {
      console.log(index)
      this.modal1 = !this.modal1
      this.$axios
        .post('/monitor/exception/getexception', {
          exception_id: index
        })
        .then(res => {
          console.log(res.data)
          var dataList = res.data
          console.log(dataList.result_code)
          if (dataList.result_code === 0) {
            this.result_modal = dataList.result
          } else if (dataList.result_code === 1) {
            this.$Message.error(dataList.result_msg)
          }
        })
    }
  }
}
</script>
<style lang='less'>
.ivu-modal-footer {
  display: none;
}
.ivu-modal {
  width: 1000px !important;
}
</style>
