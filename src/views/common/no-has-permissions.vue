<template>
  <div class="page-no-has-permissions-wrap">
    <a-result :status="null" subtitle="您没有查看该页面的权限">
      <template #icon>
        <!-- <IconFaceSmileFill /> -->
      </template>
      <template #extra>
        <a-space>
          <a-button @click="mixins_contactAdministrator">联系管理员</a-button>
          <a-button type="primary" @click="back">返回</a-button>
        </a-space>
      </template>
    </a-result>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
  },
}
</script>
<style lang="scss" scoped>
.page-no-has-permissions-wrap {
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100%;
  position: relative;
}
</style>