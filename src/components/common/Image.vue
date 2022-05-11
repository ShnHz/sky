<template>
  <a-image :width="width" :height="height" :src="src" :preview="false"/>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    width: {
      type: [String, Number],
      default: 'auto',
    },
    height: {
      type: [String, Number],
      default: 'auto',
    },

  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
</style>