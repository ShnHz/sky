<template>
  <div class="layout-user-wrap" :class="{'is-collapsed':$store.state.common.collapsed}" :title="$store.state.common.userInfo.username">
    <a-avatar :size="$store.state.common.collapsed ? 36 : 50">
      <img alt="avatar" :src="avatar" />
    </a-avatar>
    <div class="user-info-wrap">
      <h3>Hi,{{$store.state.common.userInfo.username}}</h3>
      <p>nice to meet you!</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      avatar:this.$store.getters['common/getUserAvatar']
    }
  },
}
</script>
<style lang="scss" scoped>
.layout-user-wrap {
  display: flex;
  align-items: flex-start;
  width: 280px;
  height: 134px;
  padding: 24px 24px 60px;
  transition: padding 0.1s ease;
  &.is-collapsed {
    padding: 24px 6px 60px;
    ::v-deep(.arco-avatar) {
      width: 36px !important;
      height: 36px !important;
    }
    .user-info-wrap {
      opacity: 0;
    }
  }
  ::v-deep(.arco-avatar) {
    position: relative;
    margin-right: 20px;
    box-shadow: -10px 20px 100px 2px mix($--sideBar-bg, $--themeColor, 30%);
    transition: all $--sideBar-transition-duration ease;
  }
  .user-info-wrap {
    opacity: 1;
    position: relative;
    margin-top: 6px;
    transition: opacity $--sideBar-transition-duration ease;
    p {
      margin-top: 6px;
      font-size: 14px;
      font-weight: 400;
    }
  }
}
</style>