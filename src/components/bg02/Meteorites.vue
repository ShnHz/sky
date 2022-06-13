<template>
    <div class="meteorites2-wrap" :style="theStyle">
        <div class="meteor meteor-1" :style="{ 'background-image': img }"></div>
        <div class="meteor meteor-2" :style="{ 'background-image': img, 'margin-top': theStyle2 }"></div>
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
            let opacity = flyPx.value >= 11145 ? '0.6' : flyPx.value <= 10545 ? '0.2' : 0.6 - (600 + 10545 - flyPx.value) / 600 * 0.4
            let right = flyPx.value >= 11145 ? 'calc(100vw + 260px)' : flyPx.value <= 10545 ? '-260px' : `calc(${(600 - 11145 + flyPx.value) * 0.16666}vw)`
            let bottom = flyPx.value >= 11145 ? '6645' : flyPx.value <= 10545 ? '11445' : 11445 - (600 - 11145 + flyPx.value) * 1

            return `opacity:${opacity};right:${right};bottom:${bottom}px`
        })
        const theStyle2 = computed(() => {
            let marginTop = flyPx.value >= 11145 ? '-300' : flyPx.value <= 10545 ? '0' : 0 - Math.abs(10545 - flyPx.value) / 2

            return `${marginTop}px`
        })

        return {
            img: 'url(@/../static/img/meteorite/meteor.png)',

            theStyle,
            theStyle2,
        }
    },
})
</script>
<style lang="scss" scoped>
.meteorites2-wrap {
    z-index: 9999;
    right: -260px;
    position: absolute;
    bottom: 11445px;

    .meteor {
        width: 323px;
        height: 178px;
        background: url(../img/elements/meteor.png) no-repeat top left;
    }

    .meteor-2 {
        width: 150px;
        height: 83px;
        background-size: 150px;
        margin-top: 10px;
        margin-left: 120px;
    }
}

@media screen and (max-width: 390px) {
    .meteorites-wrap {
        margin-left: 80px;
    }
}
</style>