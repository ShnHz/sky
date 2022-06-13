<template>
    <div class="monkey-wrap" :style="theStyle">
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
            console.log(500 - 10431 + props.flyPx)
            let marginTop = props.flyPx >= 10431 ? '0' : (10431 - props.flyPx) * 2
            let opacity = props.flyPx >= 10431 ? '1' : props.flyPx <= 9931 ? '0' : (500 - 10431 + props.flyPx) / 500
            let scale = props.flyPx >= 10431 ? '1' : props.flyPx <= 9931 ? '0.5' : 0.5 + (500 - 10431 + props.flyPx) * 0.001
            let rotate = props.flyPx >= 10431 ? '0' : props.flyPx <= 9931 ? 270 : 270 - (500 - 10431 + props.flyPx) * 0.54

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