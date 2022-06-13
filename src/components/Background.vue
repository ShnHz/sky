<template>
  <div class="background-wrap">
    <div class="section-container section-two">
      <section :style="{ 'background-image': imgB2tile }">
      </section>
      <section :style="{ 'background-image': imgB2Bg }">
      </section>
    </div>

    <div class="section-container section-one">
      <section :style="{ 'background-image': imgB1tile }">
      </section>
      <section :style="{ 'background-image': imgB1Bg }">
      </section>
      <div id="earth-container" class="earth-container" :style="{ 'background': imgEarth }"></div>
      <div id="stars-container" class="stars-container" :style="{ 'background': imgStars }"></div>
    </div>

    <Cloud :scrollTop="scrollTop" :flyPx="flyPx" />
    <Plane :scrollTop="scrollTop" :flyPx="flyPx" />
    <Planex1 :scrollTop="scrollTop" :flyPx="flyPx" />
    <Meteorite :scrollTop="scrollTop" :flyPx="flyPx" />
    <Legao :scrollTop="scrollTop" :flyPx="flyPx" />
    <MeteorologicalBalloon :scrollTop="scrollTop" :flyPx="flyPx" />
    <Parachuting :scrollTop="scrollTop" :flyPx="flyPx" />
    <Biological :scrollTop="scrollTop" :flyPx="flyPx" />
    <Aurora :scrollTop="scrollTop" :flyPx="flyPx" />
    <NoOneBalloon :scrollTop="scrollTop" :flyPx="flyPx" />
    <Meteorites :scrollTop="scrollTop" :flyPx="flyPx" />

    <Monkey :scrollTop="scrollTop" :flyPx="flyPx" />
    <Meteorites2 :scrollTop="scrollTop" :flyPx="flyPx" />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed } from 'vue'
import WOW from 'wow.js'

// bg01
import Cloud from '@/components/bg01/Cloud.vue'
import Plane from '@/components/bg01/Plane.vue'
import Planex1 from '@/components/bg01/Planex1.vue'
import Meteorite from '@/components/bg01/Meteorite.vue'
import Legao from '@/components/bg01/Legao.vue'
import MeteorologicalBalloon from '@/components/bg01/MeteorologicalBalloon.vue'
import Parachuting from '@/components/bg01/Parachuting.vue'
import Biological from '@/components/bg01/Biological.vue'
import Aurora from '@/components/bg01/Aurora.vue'
import NoOneBalloon from '@/components/bg01/NoOneBalloon.vue'
import Meteorites from '@/components/bg01/Meteorites.vue'

// bg02
import Monkey from '@/components/bg02/Monkey.vue'
import Meteorites2 from '@/components/bg02/Meteorites.vue'

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
    Aurora,
    NoOneBalloon,
    Meteorites,
    Monkey,
    Meteorites2
  },
  props: {
    scrollTop: Number,
    flyPx: Number
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
.background-wrap {}

.section-container {
  position: relative;

  section {
    height: 100%;
    width: 100%;
    position: absolute;
    background-repeat: no-repeat;
    background-position: center;
    transform: rotate(180deg);

    &:first-child {
      background-repeat: repeat;

    }
  }

  &.section-one {
    height: 10545px;
  }

  &.section-two {
    height: 9000px;
  }

  .earth-container {
    z-index: 9998;
    width: 100%;
    height: 499px;
    position: absolute;
    bottom: 0;
    transform: rotate(180deg);

  }

  .stars-container {
    height: 108000px;
    width: 100%;
    position: absolute;
    bottom: 5000px;
  }
}
</style>