<template>
  <a-layout-header>
    <a-breadcrumb>
      <a-breadcrumb-item>管理系统模板</a-breadcrumb-item>
      <a-breadcrumb-item>
        <b>{{title}}</b>
      </a-breadcrumb-item>
    </a-breadcrumb>

    <div class="right-wrap">
      <span class="time-wrap">{{moment().format('dddd , D MMMM , YYYY')}}</span>
      <span class="notice-wrap">
        <a-badge :count="1" dot :offset="[1, 0]">
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
    .arco-breadcrumb {
      font-size: 16px;
      transition: all 0.2s ease;
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