<template>
  <div class="div-wrap">
    <a-menu :default-open-keys="['1']" :default-selected-keys="['0_3']" :style="{ width: '100%' }" @menu-item-click="onClickMenuItem">
      <a-menu-item key="0_1">
        <IconHome></IconHome>Menu 1
      </a-menu-item>
      <a-menu-item key="0_2">
        <IconCalendar></IconCalendar>Menu 2
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
  </div>
</template>
<script>
import {
  IconCaretRight,
  IconCaretLeft,
  IconHome,
  IconCalendar,
  IconBook,
  IconTiktokColor,
  IconLarkColor
} from '@arco-design/web-vue/es/icon'

export default {
  components: {
    IconCaretRight,
    IconCaretLeft,
    IconHome,
    IconCalendar,
    IconBook,
    IconTiktokColor,
    IconLarkColor
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
</style>