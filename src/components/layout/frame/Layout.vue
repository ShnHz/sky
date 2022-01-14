<template>
  <a-layout>
    <a-layout-sider collapsible :collapsed="collapsed" :width="280">
      <LayoutUser />
      <LayoutMenu />
      <!-- trigger -->
      <template #trigger>
        <div class="collapsed-btn-wrap" @click="collapsed=!collapsed">
          <IconMenuUnfold v-if="collapsed"></IconMenuUnfold>
          <IconMenuFold v-else></IconMenuFold>
        </div>
      </template>
    </a-layout-sider>
    <a-layout>
      <LayoutHeader />
      <a-layout>
        <a-layout>
          <LayoutContent v-if="routerView" />
        </a-layout>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import LayoutHeader from './Header.vue'
import LayoutContent from './Content.vue'
import LayoutMenu from './Menu.vue'
import LayoutUser from './User.vue'

import { IconMenuFold, IconMenuUnfold } from '@arco-design/web-vue/es/icon'

export default {
  components: {
    LayoutHeader,
    LayoutContent,
    LayoutMenu,
    LayoutUser,
    IconMenuUnfold,
    IconMenuFold,
  },
  watch: {
    collapsed: {
      immediate: true,
      deep: true,
      handler(value) {
        console.log(value)
        this.$store.commit('common/setCollapsed', value)
      },
    },
  },
  data() {
    return {
      collapsed: false,
      routerView: true,
    }
  },
  mounted() {
    this.$bus.$on('reload-router-view', () => {
      this.routerView = false
      this.$nextTick(() => {
        this.routerView = true
      })
    })
  },
}
</script>
<style lang="scss" scoped>
</style>