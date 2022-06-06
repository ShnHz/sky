<template>
  <div class="section-one-container section-one">
    <section>
      <div id="earth-container" class="earth-container"></div>
      <Cloud :scrollTop="scrollTop" />
    </section>
  </div>
  <div class="altitude-wrap">
    <p>
      滚动高度：{{ scrollTop }} px
    </p>
    <p>
      飞行高度：{{ flyHeight }} km
    </p>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed } from 'vue'
import WOW from 'wow.js'
import Cloud from '@/components/bg01/Cloud.vue'

export default defineComponent({
  components: {
    Cloud
  },
  props: {
    scrollTop: Number,
  },
  setup(props, context) {
    onMounted(() => {
      new WOW({ animateClass: 'animate__animated' }).init()
    })


    const flyHeight = computed(() => {
      //飞行高度
      if (props.scrollTop <= 1160) {
        return Math.round(props.scrollTop * 5.25 / 1000)
      } else if (props.scrollTop <= 1360) {
        return Math.round(props.scrollTop * 6.54 / 1000)
      } else if (props.scrollTop <= 1560) {
        return Math.round(props.scrollTop * 7.05 / 1000)
      }

      return Math.round(props.scrollTop / 1000)
    })

    return { flyHeight }
  },
})
</script>

<style scoped lang="scss">
.section-one-container {

  &.section-one {
    height: 10545px;
    background-image: url('../../../static/img/bg/b1-tile.jpg');

    section {
      height: 10545px;
      background-image: url('../../../static/img/bg/b1.jpg');
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  .earth-container {
    z-index: 9998;
    width: 100%;
    height: 499px;
    position: absolute;
    background: url('../../../static/img/earth.png') repeat-x top center;
  }
}

.altitude-wrap {
  position: fixed;
  bottom: 100px;
  left: 50%;
  padding: 4px 12px;
  color: #fff;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.6);
  transform: translateX(-50%);
  border-radius: 12px;
}
</style>