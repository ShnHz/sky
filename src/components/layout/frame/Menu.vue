<template>
  <a-menu :default-open-keys="[]" :default-selected-keys="active" :style="{ width: '100%' }" @menu-item-click="onClickMenuItem">
    <a-menu-item key="Index">
      <IconHome></IconHome>主页
    </a-menu-item>
    <a-menu-item key="404">
      <IconCommon></IconCommon>404
    </a-menu-item>
    <a-menu-item key="0_3">
      <IconBook></IconBook>Menu 3
    </a-menu-item>
    <a-sub-menu key="1">
      <template #title>
        <IconLarkColor></IconLarkColor>Navigation 1
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
        <IconTiktokColor></IconTiktokColor>Navigation 4
      </template>
      <a-menu-item key="4_1">Menu 1</a-menu-item>
      <a-menu-item key="4_2">Menu 2</a-menu-item>
      <a-menu-item key="4_3">Menu 3</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
<script>
import {
  IconCaretRight,
  IconCaretLeft,
  IconHome,
  IconCalendar,
  IconBook,
  IconTiktokColor,
  IconLarkColor,
  IconCommon
} from '@arco-design/web-vue/es/icon'

export default {
  components: {
    IconCaretRight,
    IconCaretLeft,
    IconHome,
    IconCalendar,
    IconBook,
    IconTiktokColor,
    IconLarkColor,
    IconCommon
  },
  data() {
    return {}
  },
  computed: {
    active() {
      return this.$route.name 
    }
  },
  methods: {
    onClickMenuItem(item) {
      this.$router.push({
        name: item,
      })
    },
  },
}
</script>
<style lang="scss" scoped>
</style>