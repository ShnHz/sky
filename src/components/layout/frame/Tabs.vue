<template>
  <div class="tabs-wrap">
    <a-tabs type="card" @tab-click="handleClick" @delete="handleDelete" editable>
      <a-tab-pane :closable="item.meta.closable != false" :key="item" v-for="(item) in visitedRoutes">
        <template #title>{{item.meta.title}}</template>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import { IconLeft, IconRight } from '@arco-design/web-vue/es/icon'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    IconLeft,
    IconRight,
  },
  data() {
    return {}
  },
  watch: {
    $route: {
      deep: true,
      immediate: true,
      handler(route) {
        this.addTabs(route)
      },
    },
  },
  computed: {
    ...mapGetters({
      visitedRoutes: 'tabsBar/visitedRoutes',
    }),
  },
  methods: {
    handleDelete(key) {},
    handleClick(key) {},

    ...mapActions({
      addVisitedRoute: 'tabsBar/addVisitedRoute',
      delVisitedRoute: 'tabsBar/delVisitedRoute',
      delOthersVisitedRoutes: 'tabsBar/delOthersVisitedRoutes',
      delAllVisitedRoutes: 'tabsBar/delAllVisitedRoutes',
    }),
    async addTabs(tag) {
      if (tag.name && tag.meta && tag.meta.tagHidden !== true) {
        let matched = [tag.name]
        if (tag.matched) matched = tag.matched.map((item) => item.name)
        await this.addVisitedRoute({
          path: tag.path,
          fullPath: tag.fullPath,
          query: tag.query,
          params: tag.params,
          name: tag.name,
          matched: matched,
          meta: { ...tag.meta },
        })
        this.tabActive = tag.fullPath
      }
    },
  },
}
</script>
<style lang="scss" >
$tabs-item-bg: #fff;
$tabs-item-bg__active: #e8f4ff;
$tabs-item-bg__hover: #dee1e6;
#vue-admin-wrap > .arco-layout {
  .tabs-wrap {
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid $--sys-borderColor;
    .arco-tabs {
      min-width: 100%;
      .arco-tabs-nav {
        &::before {
          display: none;
        }
        .arco-tabs-nav-tab-list {
          .arco-tabs-tab {
            padding: 8px 24px;
            margin-right: -18px;
            border: 0;
            background: $tabs-item-bg;
            transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            border-radius: 12px 12px 0 0;
            .arco-tabs-tab-close-btn {
              display: none;
              position: relative;
              top: -1px;
              .arco-icon-hover-size-medium {
                font-size: 12px;
              }
            }
            &:hover {
              padding: 8px 30px;
              background: $tabs-item-bg__hover;
              -webkit-mask: url('/static/img/bg/tabsbg.png');
              -webkit-mask-size: 100% 100%;
              mask: url('/static/img/bg/tabsbg.png');
              mask-size: 100% 100%;
              .arco-tabs-tab-close-btn {
                display: block;
              }
            }
            &.arco-tabs-tab-active {
              padding: 8px 30px;
              background: $tabs-item-bg__active;
              -webkit-mask: url('/static/img/bg/tabsbg.png');
              -webkit-mask-size: 100% 100%;
              mask: url('/static/img/bg/tabsbg.png');
              mask-size: 100% 100%;
              .arco-tabs-tab-close-btn {
                display: block;
              }
            }
          }
        }
      }
      .arco-tabs-content {
        display: none;
      }
    }
  }
}
</style>