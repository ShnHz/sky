<template>
  <div class="layout-user-wrap" :class="{'is-collapsed':$store.state.common.collapsed}" :title="$store.state.common.userInfo.username">
    <a-image width="50" height="50" :src="avatar" show-loader />
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
      avatar: new URL(`../../../assets/img/common/avatar.jpg`, import.meta.url)
        .href,
    }
  },
}
</script>
<style lang="scss" scoped>
.layout-user-wrap {
  display: flex;
  align-items: center;
  width: 280px;
  padding: 24px 24px 60px;
  &.is-collapsed {
    padding: 24px 6px 60px;
    ::v-deep {
      .arco-image,
      .arco-image-img {
        width: 36px !important;
        height: 36px !important;
      }
    }
  }
  ::v-deep {
    .arco-image {
      position: relative;
      margin-right: 20px;
    }
    .arco-image-img {
      border-radius: 50%;
      box-shadow: -10px 20px 100px 2px mix($--sideBarBg, $--themeColor, 30%);
    }
  }
  .user-info-wrap {
    p {
      margin-top: 6px;
      font-size: 14px;
      font-weight: 400;
    }
  }
}
</style>