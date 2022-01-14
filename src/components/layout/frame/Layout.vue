<template>
  <a-layout>
    <a-layout-sider collapsible :width="280">
      <div class="logo" />
      <LayoutMenu />
      <!-- trigger -->
      <template #trigger="{ collapsed }">
        <IconMenuUnfold v-if="collapsed"></IconMenuUnfold>
        <IconMenuFold v-else></IconMenuFold>
      </template>
    </a-layout-sider>
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout>
        <a-breadcrumb>
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <LayoutContent />
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import LayoutContent from './Content.vue'
import LayoutMenu from './Menu.vue'
import { IconMenuFold, IconMenuUnfold } from '@arco-design/web-vue/es/icon'

export default {
  components: {
    LayoutContent,
    LayoutMenu,
    IconMenuUnfold,
    IconMenuFold
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
</style>