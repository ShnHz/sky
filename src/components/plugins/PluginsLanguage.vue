<template>
  <span class="language-wrap" @click="changeLangEvent">
    <slot></slot>
  </span>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    changeLangEvent() {
      this.$i18n.locale = this.$i18n.locale == 'zh-CN' ? 'zh-US' : 'zh-CN'
      localStorage.setItem('localeLanguage', this.$i18n.locale)
    },
  },
}
</script>
<style lang="scss" scoped>
.language-wrap {
}
</style>