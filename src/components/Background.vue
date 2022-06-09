<template>
  <div class="section-one-container section-one" :style="{ 'background-image': imgB1tile }">
    <section :style="{ 'background-image': imgB1Bg }">
      <div id="earth-container" class="earth-container" :style="{ 'background': imgEarth }"></div>
      <div id="stars-container" class="stars-container" :style="{ 'background': imgStars }"></div>

      <Cloud :scrollTop="scrollTop" />
      <Plane :scrollTop="scrollTop" />
      <Planex1 :scrollTop="scrollTop" />
      <Meteorite :scrollTop="scrollTop" />
      <Legao :scrollTop="scrollTop" />
      <MeteorologicalBalloon :scrollTop="scrollTop" />
      <Parachuting :scrollTop="scrollTop" />
      <Biological :scrollTop="scrollTop" />
      <Aurora :scrollTop="scrollTop" />
    </section>
  </div>

  <div class="section-one-container section-two" :style="{ 'background-image': imgB2tile }">
    <section :style="{ 'background-image': imgB2Bg }">
    </section>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed } from 'vue'
import WOW from 'wow.js'

import Cloud from '@/components/bg01/Cloud.vue'
import Plane from '@/components/bg01/Plane.vue'
import Planex1 from '@/components/bg01/Planex1.vue'
import Meteorite from '@/components/bg01/Meteorite.vue'
import Legao from '@/components/bg01/Legao.vue'
import MeteorologicalBalloon from '@/components/bg01/MeteorologicalBalloon.vue'
import Parachuting from '@/components/bg01/Parachuting.vue'
import Biological from '@/components/bg01/Biological.vue'
import Aurora from '@/components/bg01/Aurora.vue'

export default defineComponent({
  components: {
    Cloud,
    Plane,
    Planex1,
    Meteorite,
    Legao,
    MeteorologicalBalloon,
    Parachuting,
    Biological,
    Aurora
  },
  props: {
    scrollTop: Number,
  },
  setup(props, context) {
    onMounted(() => {
      new WOW({ animateClass: 'animate__animated' }).init()
    })

    return {
      imgB1tile: 'url(@/../static/img/bg/b1-tile.jpg)',
      imgB1Bg: 'url(@/../static/img/bg/b1.jpg)',
      imgEarth: 'url(@/../static/img/bg/earth.png) repeat-x top center',
      imgStars: 'url(@/../static/img/bg/stars.png) center center',

      imgB2tile: 'url(@/../static/img/bg/b2-tile.jpg)',
      imgB2Bg: 'url(@/../static/img/bg/b2.jpg)',
    }
  },
})
</script>

<style scoped lang="scss">
.section-one-container {

  &.section-one {
    height: 10545px;

    section {
      height: 10545px;
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  &.section-two {
    height: 9000px;

    section {
      height: 9000px;
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  .earth-container {
    z-index: 9998;
    width: 100%;
    height: 499px;
    position: absolute;
  }

  .stars-container {
    height: 108000px;
    width: 100%;
    position: absolute;
    top: 5000px;
  }
}
</style>