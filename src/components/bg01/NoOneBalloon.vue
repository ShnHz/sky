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
    },
    setup(props, context) {
        const theStyle = computed(() => {
            let opacity = props.scrollTop >= 5448 ? '1' : props.scrollTop <= 4948 ? '0' : (500 - 5448 + props.scrollTop) / 500
            let scale = props.scrollTop >= 5448 ? '0.8' : props.scrollTop <= 4948 ? '0.1' : 0.1 + (500 - 5448 + props.scrollTop) * 0.0014
            let rotate = props.scrollTop >= 5448 ? '360' : props.scrollTop <= 4948 ? '420' : 420 - (500 - 5448 + props.scrollTop) * 0.12
            let top = props.scrollTop >= 5748 ? '5748' : props.scrollTop <= 5248 ? '5998' : 5998 - (500 - 5748 + props.scrollTop) / 2

            return `opacity:${opacity};transform:scale(${scale}) rotate(${rotate}deg);top:${top}px`
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
    top: 5748px;
    left: 50%;
    margin-left: -220px;
    transform-origin:center center;

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