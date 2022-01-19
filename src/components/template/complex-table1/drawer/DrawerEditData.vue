<template>
  <a-drawer :visible="show" @ok="handleOk" @cancel="handleClose" @close="handleClose" unmountOnClose :maskClosable="false" ok-text="提交">
    <template #title>{{title}}</template>
    
  </a-drawer>
</template>
<script>
export default {
  emits: ['close'],
  props: {
    data: {
      type: Object,
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    visible: function (val, oldval) {
      this.show = val
      if (this.show) {
      }
    },
  },
  computed: {
      title() {
          return this.data.id ? `编辑${this.data.name}` : '新增'
      }
  },
  data() {
    return {
      show: this.visible,
    }
  },
  methods: {
    handleOk() {},
    handleClose() {
      this.$emit('close')
    },
  },
}
</script>
<style lang="scss" scoped>
</style>