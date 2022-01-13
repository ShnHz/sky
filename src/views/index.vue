/*
 * @Author: sanghangning 
 * @Date: 2019-12-11 10:47:09 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-01-13 22:48:40
 */
<template >
  <div class="index-wrap">
    <Empty />
  </div>
</template>
<script>
export default {
  name: 'index',
  data() {
    return {}
  },
  computed: {},
  mounted() {
    console.log(this.moment().format('dddd'))
  },
  methods: {},
}
</script>
<style scoped lang="scss">
.index-wrap {
  min-height: 100vh;
  padding: 10px;
  background: var(--viewBg);
}
</style>