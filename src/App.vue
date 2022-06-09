/*
 * @Author: sanghangning 
 * @Date: 2022-06-06 11:43:42 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2022-06-09 18:21:41
 */

<template >
  <div class="index-wrap">
    <Loading />
    <Background :scrollTop="scrollTop" />
    <Rocket :scrollTop="scrollTop" />
    <!-- <HeightRuler :scrollTop="scrollTop" /> -->
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue'
import Loading from '@/components/Loading.vue'

import Background from '@/components/Background.vue'
import Rocket from '@/components/Rocket.vue'
import HeightRuler from '@/components/HeightRuler.vue'

export default defineComponent({
  components: { Loading, Background, Rocket, HeightRuler },
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
  height: 18608px;
  position: relative;
  overflow: hidden;
}
</style>