<template>
  <div id="app" class="app-wrap">
    <content>
      <router-view class="router-view-wrap" id="routerView" />
    </content>
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
