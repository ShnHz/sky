<template>
    <div class="monkey-wrap" :style="theStyle">
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
            let marginTop = flyPx.value >= 10431 ? '0' : (10431 - flyPx.value) * 2
            let opacity = flyPx.value >= 10431 ? '1' : flyPx.value <= 9931 ? '0' : (500 - 10431 + flyPx.value) / 500
            let scale = flyPx.value >= 10431 ? '1' : flyPx.value <= 9931 ? '0.5' : 0.5 + (500 - 10431 + flyPx.value) * 0.001
            let rotate = flyPx.value >= 10431 ? '0' : flyPx.value <= 9931 ? 270 : 270 - (500 - 10431 + flyPx.value) * 0.54

            return `margin-bottom:${marginTop}px;opacity:${opacity};transform:scale(${scale}) rotate(${rotate}deg)`
        })

        return {
            theStyle,

            img: 'url(@/../static/img/bg/icon-sprite1.1.png)'
        }
    },
})
</script>
<style lang="scss" scoped>
.monkey-wrap {
    z-index: 9999;
    width: 81px;
    height: 86px;
    position: absolute;
    bottom: 10683px;
    left: 50%;
    margin-left: -240px;

    >div {
        width: 81px;
        height: 86px;
        background-repeat: no-repeat;
        background-size: 500px 1602px;
        background-position: -81px -105px;
    }
}

@media screen and (max-width: 390px) {
    .monkey-wrap {
        margin-left: 50px;
    }
}
</style>