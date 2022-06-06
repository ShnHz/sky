<template>
  <div id="rocket"
    :style="{ 'background-image': imgRocket, 'top': isIgnition ? '318px' : scrollTop < 10 ? '318px' : `${318 - ignitionDistance + scrollTop}px` }"
    :class="{ 'is-ignition': isIgnition, 'is-flying': isFlying }">
    <div class="flame-wrap">
      <div :style="{ 'background': imgFlame }" id="flame-big" class="flame"></div>
      <div :style="{ 'background': imgFlame }" id="flame-small" class="flame"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed } from 'vue'

export default defineComponent({
  props: {
    scrollTop: Number,
  },
  setup(props, context) {
    // 点火距离
    const ignitionDistance = ref(250)

    const isIgnition = computed(() => {
      //点火状态
      return props.scrollTop >= 10 && props.scrollTop <= ignitionDistance.value
    })
    const isFlying = computed(() => {
      //飞行状态
      return props.scrollTop > ignitionDistance.value
    })

    return {
      ignitionDistance,
      isFlying,
      isIgnition,

      imgRocket: 'url(@/../static/img/rocket/rocket.png)',
      imgFlame: 'url(@/../static/img/rocket/flame-sprite.png) no-repeat center center'
    }
  },
})
</script>

<style scoped lang="scss">
#rocket {
  z-index: 9999;
  width: 79px;
  height: 130px;
  position: absolute;
  left: 50%;
  top: 318px;
  margin-left: -39px;

  .flame-wrap {
    position: absolute;
    top: -98px;
    opacity: 0;
    transition: opacity .5s ease;

    .flame {
      position: absolute;
      top: 0px;
      left: 0px;
      height: 98px;
      width: 79px;
    }

    #flame-big {
      background-position: -162px 0px;
      animation: flame-big 1s ease-in-out;
      animation-iteration-count: infinite;
    }

    #flame-small {
      background-position: -81px 0px;
      animation: flame-small 1s ease-in-out;
      animation-iteration-count: infinite;
    }
  }

  &.is-ignition {
    animation: shakeX .5s infinite;
  }

  &.is-flying {
    animation: shakeXS 10s infinite;

    .flame-wrap {
      opacity: 1;
    }
  }
}

@keyframes shakeX {

  0%,
  100% {
    transform: translateX(0)
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-2px)
  }

  20%,
  40%,
  60%,
  80% {
    transform: translateX(2px)
  }
}

@keyframes shakeXS {

  0%,
  100% {
    transform: translateX(0)
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-1px)
  }

  20%,
  40%,
  60%,
  80% {
    transform: translateX(1px)
  }
}

@keyframes flame-big {

  0% {
    opacity: 1;
    top: -5px;
  }

  25% {
    opacity: .5;
    top: 0;
  }

  50% {
    opacity: .1;
    top: -5px;
  }

  75% {
    opacity: .5;
    top: 0;
  }

  100% {
    opacity: 1;
    top: -5px;
  }
}

@keyframes flame-small {

  0% {
    opacity: 0;
    top: 0;
  }

  25% {
    opacity: .5;
    top: -5px;
  }

  50% {
    opacity: 1;
    top: 0;
  }

  75% {
    opacity: .5;
    top: -5px;
  }

  100% {
    opacity: 0;
    top: 0;
  }
}
</style>