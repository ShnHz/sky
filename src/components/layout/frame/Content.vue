<template>
  <a-layout-content>
    <router-view v-slot="{ Component }" :key="key" class="content-wrap">
      <transition mode="out-in" name="fade-transform">
        <keep-alive :include="cachedRoutes" :max="99">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </a-layout-content>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'LayoutContent',
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      visitedRoutes: 'tabsBar/visitedRoutes',
    }),
    cachedRoutes() {
      const cachedRoutesArr = []
      this.visitedRoutes.forEach((item) => {
        if (!item.meta.noKeepAlive) {
          cachedRoutesArr.push(item.name)
        }
      })
      return cachedRoutesArr
    },
    key() {
      return this.$route.path
    },
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

.arco-layout-content > .content-wrap {
  padding: 24px 0;
}
</style>