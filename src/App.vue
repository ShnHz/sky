<template>
  <div id="app" class="app-wrap">
    <a-layout class="layout-demo">
      <a-layout-sider hide-trigger collapsible :collapsed="collapsed">
        <!-- <div class="logo" />
        <a-menu
          :defaultOpenKeys="['1']"
          :defaultSelectedKeys="['0_3']"
          :style="{ width: '100%' }"
          @menuItemClick="onClickMenuItem"
        >
          <a-menu-item key="0_1" disabled>
            <IconHome />
            Menu 1
          </a-menu-item>
          <a-menu-item key="0_2">
            <IconCalendar />
            Menu 2
          </a-menu-item>
          <a-menu-item key="0_3">
            <IconCalendar />
            Menu 3
          </a-menu-item>
          <a-sub-menu key="1">
            <template #title>
              <span><IconCalendar />Navigation 1</span>
            </template>
            <a-menu-item key="1_1">Menu 1</a-menu-item>
            <a-menu-item key="1_2">Menu 2</a-menu-item>
            <a-sub-menu key="2" title="Navigation 2">
              <a-menu-item key="2_1">Menu 1</a-menu-item>
              <a-menu-item key="2_2">Menu 2</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="3" title="Navigation 3">
              <a-menu-item key="3_1">Menu 1</a-menu-item>
              <a-menu-item key="3_2">Menu 2</a-menu-item>
              <a-menu-item key="3_3">Menu 3</a-menu-item>
            </a-sub-menu>
          </a-sub-menu>
          <a-sub-menu key="4">
            <template #title>
              <span><IconCalendar />Navigation 4</span>
            </template>
            <a-menu-item key="4_1">Menu 1</a-menu-item>
            <a-menu-item key="4_2">Menu 2</a-menu-item>
            <a-menu-item key="4_3">Menu 3</a-menu-item>
          </a-sub-menu>
        </a-menu> -->
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="padding-left: 20px">
          <!-- <a-button shape="round" @click="onCollapse">
            <IconCaretRight v-if="collapsed" />
            <IconCaretLeft v-else />
          </a-button> -->
        </a-layout-header>
        <a-layout style="padding: 0 24px">
          <a-breadcrumb :style="{ margin: '16px 0' }">
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>List</a-breadcrumb-item>
            <a-breadcrumb-item>App</a-breadcrumb-item>
          </a-breadcrumb>
          <a-layout-content>
                  <router-view class="router-view-wrap" id="routerView" />
          </a-layout-content>
          <a-layout-footer>Footer</a-layout-footer>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>

<script setup>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style lang="scss" scoped>
.app-wrap {
  content {
    display: block;
    min-height: calc(100vh);
  }
  .router-view-wrap {
    min-height: calc(100vh);
    background: var(--viewBg);
  }
}
</style>
