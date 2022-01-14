/*
 * @Author: sanghangning 
 * @Date: 2019-12-11 10:47:09 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2022-01-14 11:58:44
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
}
</style>