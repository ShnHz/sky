<template>
    <div class="meteorites-wrap" :style="theStyle">
        <div class="meteor meteor-1"></div>
        <div class="meteor meteor-2" :style="theStyle2"></div>
        <div class="meteor meteor-3" :style="theStyle3"></div>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'

import { scrollStore } from '../../store/scroll'
import { storeToRefs } from 'pinia'

export default defineComponent({
    setup(props, context) {
        const { flyPx } = storeToRefs(scrollStore())

        const theStyle = computed(() => {
            let opacity = flyPx.value >= 6930 ? '1' : flyPx.value <= 6330 ? '0.4' : (600 - 6330 + flyPx.value) / 600 / 0.6 - 1
            let right = flyPx.value >= 6930 ? 'calc(100vw + 260px)' : flyPx.value <= 6330 ? '-260px' : `calc(${(600 - 6930 + flyPx.value) * 0.16666}vw)`
            let bottom = flyPx.value >= 6930 ? '6645' : flyPx.value <= 6330 ? '7245' : 7245 - (600 - 6930 + flyPx.value) * 1

            return `opacity:${opacity};right:${right};bottom:${bottom}px`
        })
        const theStyle2 = computed(() => {
            let marginTop = flyPx.value >= 6930 ? '40' : flyPx.value <= 6330 ? '10' : 10 + (600 - 6930 + flyPx.value) / 20

            return `margin-top:${marginTop}px`
        })
        const theStyle3 = computed(() => {
            let marginTop = flyPx.value >= 6930 ? '60' : flyPx.value <= 6330 ? '20' : 20 + (600 - 6930 + flyPx.value) / 15

            return `margin-top:${marginTop}px`
        })

        return {
            theStyle,
            theStyle2,
            theStyle3
        }
    },
})
</script>
<style lang="scss" scoped>
.meteorites-wrap {
    z-index: 9999;
    right: -260px;
    position: absolute;
    bottom: 7245px;

    .meteor {
        height: 4px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom-left-radius: 100px;
        border-bottom-right-radius: 100px;
        background: linear-gradient(to right, rgba(249, 249, 249, 1) 0%, rgba(252, 228, 50, 0.96) 4%, rgba(255, 48, 48, 0.81) 19%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%);
        transform: rotate(-30deg);
    }

    .meteor-1 {
        width: 155px;
    }

    .meteor-2 {
        width: 115px;
        margin-top: 10px;
        margin-left: 120px;
    }

    .meteor-3 {
        width: 91px;
        margin-top: 20px;
        margin-left: 170px;
    }
}

@media screen and (max-width: 390px) {
    .meteorites-wrap {
        margin-left: 80px;
    }
}
</style>