<template>
  <a-layout-content>
    <router-view v-slot="{ Component }">
      <transition mode="out-in" name="fade-transform">
        <component :is="Component" />
      </transition>
    </router-view>
  </a-layout-content>
</template>
<script>
export default {
  name: 'LayoutContent',
  data() {
    return {}
  },
}
</script>
<style lang="scss">
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.2s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.vab-content {
}
</style>