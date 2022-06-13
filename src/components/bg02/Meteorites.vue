<template>
    <div class="meteorites2-wrap" :style="theStyle">
        <div class="meteor meteor-1" :style="{ 'background-image': img }"></div>
        <div class="meteor meteor-2" :style="{ 'background-image': img, 'margin-top': theStyle2 }"></div>
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
            let opacity = props.flyPx >= 11145 ? '0.6' : props.flyPx <= 10545 ? '0.2' : 0.6 - (600 + 10545 - props.flyPx) / 600 * 0.4
            let right = props.flyPx >= 11145 ? 'calc(100vw + 260px)' : props.flyPx <= 10545 ? '-260px' : `calc(${(600 - 11145 + props.flyPx) * 0.16666}vw)`
            let bottom = props.flyPx >= 11145 ? '6645' : props.flyPx <= 10545 ? '11445' : 11445 - (600 - 11145 + props.flyPx) * 1

            return `opacity:${opacity};right:${right};bottom:${bottom}px`
        })
        const theStyle2 = computed(() => {
            let marginTop = props.flyPx >= 11145 ? '-300' : props.flyPx <= 10545 ? '0' : 0 - Math.abs(10545 - props.flyPx) / 2

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