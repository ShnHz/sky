/*
 * @Author: sanghangning 
 * @Date: 2020-08-20 14:41:08 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2021-01-07 14:31:05
 */
<template>
  <svg
    :class="svgClass"
    aria-hidden="true"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'svg-icon',
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    },
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    },
  },
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>