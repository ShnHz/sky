/*
 * @Author: sanghangning 
 * @Date: 2022-06-06 11:43:42 
 * @Last Modified by: sanghangning
 * @Last Modified time: 2022-06-13 16:18:00
 */

<template >
  <div class="index-wrap">
    <Loading />
    <Background />
    <Rocket />
    <HeightRuler />
  </div>
</template>
<script lang="ts">
import { ref, defineComponent, onMounted, computed } from 'vue'
import Loading from '@/components/other/Loading.vue'

import Background from '@/components/Background.vue'
import Rocket from '@/components/Rocket.vue'
import HeightRuler from '@/components/HeightRuler.vue'

export default defineComponent({
  components: { Loading, Background, Rocket, HeightRuler },
  setup(props, context) {
    onMounted(() => {
      setTimeout(() => {
        document.documentElement.scrollTop = document.documentElement.scrollHeight
      }, 1000);
    })

    return {}
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