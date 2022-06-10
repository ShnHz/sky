/*
 * @Author: sanghangning 
 * @Date: 2022-06-06 11:43:42 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2022-06-10 11:03:28
 */

<template >
  <div class="index-wrap">
    <Loading />
    <Background :scrollTop="scrollTop" :flyPx="flyPx" />
    <Rocket :scrollTop="scrollTop" :flyPx="flyPx" />
    <HeightRuler :scrollTop="scrollTop" :flyPx="flyPx" />
  </div>
</template>
<script lang="ts">
import { ref, defineComponent, onMounted, computed } from 'vue'
import Loading from '@/components/Loading.vue'

import Background from '@/components/Background.vue'
import Rocket from '@/components/Rocket.vue'
import HeightRuler from '@/components/HeightRuler.vue'

export default defineComponent({
  components: { Loading, Background, Rocket, HeightRuler },
  setup(props, context) {
    let scrollTop = ref(0)

    const flyPx = computed(() => {
      return document.documentElement.scrollHeight - document.documentElement.clientHeight - scrollTop.value
    })

    window.addEventListener(
      'scroll',
      (e) => {
        scrollTop.value = document.documentElement.scrollTop
      },
      false
    )

    return {
      scrollTop,
      flyPx
    }
  },
})
</script>
<style scoped lang="scss">
.index-wrap {
  height: 19545px;
  position: relative;
  overflow: hidden;
}
</style>