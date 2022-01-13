<template>
  <div class="demo-skeleton-wrap">
    <p class="introduction-wrap">
      自己写的一个vue指令骨架屏，也可以参考
      <a href="https://ant.design/components/skeleton-cn/" target="_blank">https://ant.design/components/skeleton-cn/</a>
    </p>

    <div class="demo-skeleton-content-wrap">
      <div style="width:200px;height:50px;" v-skeleton="true"></div>
      <div style="width:50px;height:50px;" v-skeleton="true"></div>
      <div style="width:50px;height:50px;border-radius:50%;overflow: hidden;" v-skeleton="true"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>
<style lang="scss" scoped>
.demo-skeleton-wrap {
  .demo-skeleton-content-wrap {
    display: flex;
    flex-wrap: wrap;
    margin-top: 55px;
    > div {
      margin-bottom: 20px;
      margin-right: 20px;
    }
  }
}
</style>