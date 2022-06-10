<template>
    <div class="no-one-balloon-wrap" :style="theStyle">
        <div :style="{ 'background-image': img }"></div>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
    props: {
        scrollTop: Number,
        flyPx: Number
    },
    setup(props, context) {
        const theStyle = computed(() => {
            let opacity = props.flyPx >= 5448 ? '1' : props.flyPx <= 4948 ? '0' : (500 - 5448 + props.flyPx) / 500
            let scale = props.flyPx >= 5448 ? '0.8' : props.flyPx <= 4948 ? '0.1' : 0.1 + (500 - 5448 + props.flyPx) * 0.0014
            let rotate = props.flyPx >= 5448 ? '360' : props.flyPx <= 4948 ? '420' : 420 - (500 - 5448 + props.flyPx) * 0.12
            let bottom = props.flyPx >= 5748 ? '5748' : props.flyPx <= 5248 ? '5498' : 5498 + (500 - 5748 + props.flyPx) / 2

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