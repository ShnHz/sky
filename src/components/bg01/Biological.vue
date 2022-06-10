<template>
    <div class="biological-wrap" :style="theStyle">
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
            let opacity = props.flyPx >= 4128 ? '1' : props.flyPx <= 3628 ? '0' : (500 - 4128 + props.flyPx) / 500
            let scale = props.flyPx >= 4128 ? '1.2' : props.flyPx <= 3628 ? '0.5' : 0.5 + (500 - 4128 + props.flyPx) * 0.0014
            let rotate = props.flyPx >= 4128 ? '360' : props.flyPx <= 3628 ? '180' : 180 + (500 - 4128 + props.flyPx) * 0.36

            return `opacity:${opacity};transform:scale(${scale}) rotate(${rotate}deg)`
        })

        return {
            theStyle,

            img: 'url(@/../static/img/bg/icon-sprite1.1.png)'
        }
    },
})
</script>
<style lang="scss" scoped>
.biological-wrap {
    z-index: 9999;
    width: 79px;
    height: 69px;
    position: absolute;
    bottom: 4550px;
    left: 50%;
    margin-left: -200px;

    >div {
        width: 79px;
        height: 69px;
        background-repeat: no-repeat;
        background-size: 500px 1602px;
        background-position: 0px -105px;
    }
}

@media screen and (max-width: 390px) {
    .biological-wrap {
        margin-left: 80px;
    }
}
</style>