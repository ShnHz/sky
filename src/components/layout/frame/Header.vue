<template>
  <a-layout-header>
    <h2>{{title}}</h2>

    <div class="right-wrap">
      <span class="time-wrap">{{moment().format('dddd , D MMMM , YYYY')}}</span>
      <span class="notice-wrap">
        <a-badge :count="9" dot :offset="[2, -2]">
          <IconNotification />
        </a-badge>
      </span>
      <span class="refresh-wrap" title="刷新" @click="refresh">
        <IconLoop />
      </span>
      <span class="fullscreen-wrap" title="全屏" @click="fullscreen">
        <IconFullscreen />
      </span>
    </div>
  </a-layout-header>
</template>
<script>
import {
  IconNotification,
  IconLoop,
  IconFullscreen,
} from '@arco-design/web-vue/es/icon'

export default {
  components: { IconNotification, IconLoop, IconFullscreen },
  data() {
    return {}
  },
  computed: {
    title() {
      return this.$route ? this.$route.meta.title : 'GAC公用组件 - LayoutHeader'
    },
  },
  mounted() {},
  methods: {
    refresh() {
      this.$bus.$emit('reload-router-view')
    },
    notice() {},
    fullscreen() {
      let element = document.documentElement
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen()
      }
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
    .right-wrap {
      margin-left: auto;
      svg {
        font-size: 16px;
      }
      > span {
        margin-left: 16px;
        &:first-child {
          margin-left: 0;
        }
      }
      .notice-wrap {
        cursor: pointer;
      }
      .refresh-wrap {
        cursor: pointer;
      }
      .fullscreen-wrap {
        cursor: pointer;
      }
      .time-wrap {
        font-size: 12px;
        color: $--textColor-3;
      }
    }
  }
}
</style>