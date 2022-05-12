<template>
  <a-result status="403" subtitle="您没有查看该页面的权限">
    <template #extra>
      <a-space>
        <a-button @click="mixins_contactAdministrator">联系管理员</a-button>
      </a-space>
    </template>
  </a-result>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
</style>