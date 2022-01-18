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
        <a-tooltip content="通知">
          <a-badge :count="1" dot :offset="[1, 0]">
            <IconNotification />
          </a-badge>
        </a-tooltip>
      </span>
      <span class="refresh-wrap" @click="refresh">
        <a-tooltip content="刷新">
          <IconLoop />
        </a-tooltip>
      </span>
      <span class="fullscreen-wrap" title="全屏" @click="fullscreen">
        <a-tooltip content="全屏">
          <IconFullscreen />
        </a-tooltip>
      </span>
      <span class="out-wrap" title="退出登录" @click="out">
        <a-tooltip content="退出登录">
          <IconPoweroff />
        </a-tooltip>
      </span>
    </div>
  </a-layout-header>
</template>
<script>
import {
  IconNotification,
  IconLoop,
  IconFullscreen,
  IconPoweroff,
} from '@arco-design/web-vue/es/icon'

export default {
  components: { IconNotification, IconLoop, IconFullscreen, IconPoweroff },
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
    out() {
      this.$router.push('/login')
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
    border-bottom: 1px solid #f6f6f6;
    .arco-breadcrumb {
      font-size: 16px;
      transition: all 0.2s ease;
    }

    .right-wrap {
      margin-left: auto;
      svg {
        font-size: 16px;
        color: $--textColor-3;
        transition: color 0.2s ease;
        &:hover {
          color: #000;
        }
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
      .out-wrap {
        cursor: pointer;
      }
    }
  }
}
</style>