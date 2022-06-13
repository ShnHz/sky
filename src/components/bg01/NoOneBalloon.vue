<template>
    <div class="no-one-balloon-wrap" :style="theStyle">
        <div :style="{ 'background-image': img }"></div>
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
            let opacity = flyPx.value >= 5448 ? '1' : flyPx.value <= 4948 ? '0' : (500 - 5448 + flyPx.value) / 500
            let scale = flyPx.value >= 5448 ? '0.8' : flyPx.value <= 4948 ? '0.1' : 0.1 + (500 - 5448 + flyPx.value) * 0.0014
            let rotate = flyPx.value >= 5448 ? '360' : flyPx.value <= 4948 ? '420' : 420 - (500 - 5448 + flyPx.value) * 0.12
            let bottom = flyPx.value >= 5748 ? '5748' : flyPx.value <= 5248 ? '5498' : 5498 + (500 - 5748 + flyPx.value) / 2

            return `opacity:${opacity};transform:scale(${scale}) rotate(${rotate}deg);bottom:${bottom}px`
        })

        return {
            theStyle,

            img: 'url(@/../static/img/bg/icon-sprite1.1.png)'
        }
    },
})
</script>
<style lang="scss" scoped>
.no-one-balloon-wrap {
    z-index: 9999;
    width: 72px;
    height: 104px;
    position: absolute;
    bottom: 5748px;
    left: 50%;
    margin-left: -220px;
    transform-origin: center center;

    >div {
        width: 72px;
        height: 104px;
        background-repeat: no-repeat;
        background-size: 500px 1602px;
        background-position: -296px 0px;
    }
}

@media screen and (max-width: 390px) {
    .no-one-balloon-wrap {
        margin-left: 80px;
    }
}
</style>