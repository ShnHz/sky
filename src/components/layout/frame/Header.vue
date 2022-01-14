<template>
  <a-layout-header>
    <h2>{{title}}</h2>
  </a-layout-header>
</template>
<script>
export default {
  data() {
    return {}
  },
  computed: {
    title() {
      return this.$route ? this.$route.meta.title : 'GAC公用组件 - LayoutHeader'
    },
  },
}
</script>
<style lang="scss">
#vue-admin-wrap > .arco-layout {
  .arco-layout-header {
    display: flex;
    align-items: center;
    height: 60px;
    border-bottom: 1px solid $--sys-borderColor;
    h2 {
      position: relative;
      font-size: 20px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.85);
      transition: all 0.3s ease;
    }
  }
}
</style>