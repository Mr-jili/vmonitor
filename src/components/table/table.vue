<template>
<div>
  <Table class="table" border :columns="columns7" :data="data6"></Table>
</div>
</template>
<script>
export default {
  props: {
    data6: Array
  },
  data () {
    return {
      columns7: [
        {
          title: '服务器IP',
          key: 'server_ip',
          render: (h, params) => {
            return h('div', [
              h('Icon', {
                props: {
                  type: 'person'
                }
              }),
              h('strong', params.row.server_ip)
            ])
          }
        },
        {
          title: '项目名称',
          key: 'project_name'
        },
        {
          title: '异常所属类名',
          key: 'class_name'
        },
        {
          title: '异常所属方法名',
          key: 'method'
        },
        {
          title: '异常时间',
          key: 'exception_time'
        },
        {
          title: '异常信息',
          key: 'id',
          width: 120,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    console.log(params.row.id)
                    this.show(params.row.id)
                  }
                }
              }, '详情')
            ])
          }
        }
      ]
    }
  },
  methods: {
    show (index) {
      this.$emit('showDrawer', index)
    }
  }
}
</script>
