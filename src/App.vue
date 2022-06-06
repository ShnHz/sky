/*
 * @Author: sanghangning 
 * @Date: 2022-06-06 11:43:42 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2022-06-06 18:19:21
 */

<template >
  <div class="index-wrap">
    <Background :scrollTop="scrollTop" />
    <Rocket :scrollTop="scrollTop" />
    <HeightRuler :scrollTop="scrollTop" />
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue'
import Background from '@/components/Background.vue'
import Rocket from '@/components/Rocket.vue'
import HeightRuler from '@/components/HeightRuler.vue'

export default defineComponent({
  components: { Background, Rocket, HeightRuler },
  setup(props, context) {
    let scrollTop = ref(0)
    window.addEventListener(
      'scroll',
      (e) => {
        scrollTop.value = document.documentElement.scrollTop
      },
      false
    )

    return {
      scrollTop,
    }
  },
})
</script>
<style scoped lang="scss">
.index-wrap {
  position: relative;
  overflow: hidden;
}
</style>