<template>
  <div id="rocket" :style="{ 'background-image': imgRocket, 'bottom': `${rocketBottom}px` }"
    :class="{ 'is-ignition': isIgnition, 'is-flying': isFlying }">
    <div class="flame-wrap">
      <div :style="{ 'background': imgFlame }" id="flame-big" class="flame"></div>
      <div :style="{ 'background': imgFlame }" id="flame-small" class="flame"></div>
    </div>
  </div>

  <div class="smoke-wrap" :class="{ 'is-visibled': flyPx >= 220 }">
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
    <i></i>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, computed } from 'vue'

export default defineComponent({
  props: {
    scrollTop: Number,
    flyPx: Number
  },
  setup(props, context) {
    const bottom = computed(() => {
      return document.documentElement.scrollHeight - props.scrollTop - 937
    })

    // 点火距离
    const ignitionDistance = ref(250)

    const isIgnition = computed(() => {
      //点火状态
      return bottom.value > 0 && bottom.value <= ignitionDistance.value
    })
    const isFlying = computed(() => {
      //飞行状态
      return bottom.value > ignitionDistance.value
    })
    const rocketBottom = computed(() => {
      //火箭位置
      if (isIgnition.value) return 318 - bottom.value
      if (bottom.value < 10) return 318

      return 70 + (bottom.value / document.getElementById('app').clientHeight) * (document.body.clientHeight - 300)
    })

    return {
      ignitionDistance,
      isFlying,
      isIgnition,
      rocketBottom,

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
  position: fixed;
  left: 50%;
  bottom: 318px;
  margin-left: -39px;
  transform: rotate(180deg);

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
    transform: translateX(0) rotate(180deg);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-2px) rotate(180deg);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translateX(2px) rotate(180deg);
  }
}

@keyframes shakeXS {

  0%,
  100% {
    transform: translateX(0) rotate(180deg);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-1px) rotate(180deg);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translateX(1px) rotate(180deg);
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


.smoke-wrap {
  z-index: 9999;
  left: 50%;
  bottom: 310px;
  position: absolute;
  --smoke: #{rgba(#f7f8ff, 0.9)};
  transform: scale(3);

  i {
    opacity: 0;
    transform: scale(0.7);
    border-radius: 50%;
    position: absolute;
    bottom: var(--b, -20px);
    left: var(--l, -12px);
    width: var(--s, 32px);
    height: var(--s, 32px);
    background: var(--smoke);

    &:nth-child(1) {
      --s: 22px;
      --b: -10px;
    }

    &:nth-child(2) {
      --s: 20px;
      --l: -24px;
      --b: -10px;
      --d: 50ms;
    }

    &:nth-child(3) {
      --s: 22px;
      --l: 0;
      --b: -12px;
      --d: 20ms;
    }

    &:nth-child(4) {
      --s: 12px;
      --l: 16px;
      --b: -6px;
      --d: 120ms;
    }

    &:nth-child(5) {
      --s: 24px;
      --l: -20px;
      --b: -14px;
      --d: 80ms;
    }

    &:nth-child(6) {
      --s: 12px;
      --l: -28px;
      --b: -8px;
      --d: 60ms;
    }
  }

  &.is-visibled {
    i {
      animation: smoke 1.7s ease forwards calc(var(--d) + 600ms);

      &:nth-child(3),
      &:nth-child(6) {
        animation: smoke-alt 1.7s ease forwards calc(var(--d) + 600ms);
      }
    }
  }
}

@keyframes smoke {

  20%,
  80% {
    opacity: 1;
    transform: scale(1);
  }

  55% {
    transform: scale(0.92);
  }
}

@keyframes smoke-alt {

  20%,
  80% {
    opacity: 1;
    transform: scale(1);
  }

  60% {
    transform: scale(1.08);
  }
}
</style>