<template>
  <div>
    <Page :total="totalCount" :current="pageValue" show-elevat show-elevator @on-change="handleTotalChange"/>
  </div>
</template>
<script>
export default {
  props: {
    totalCount: {
      type: Number,
      default: 0
    },
    searchChange: {
      type: Number,
      default: 1
    },
    pageValue: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {}
  },
  methods: {
    handleTotalChange (value) {
      this.$emit('totalChange', value)
    }
  }
}
</script>
