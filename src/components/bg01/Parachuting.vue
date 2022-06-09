<template>
    <div class="parachuting-wrap" :style="theStyle">
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
            let marginTop = props.scrollTop >= 4128 ? '0' : (4128 - props.scrollTop) * 2
            let opacity = props.scrollTop >= 4128 ? '1' : props.scrollTop <= 3628 ? '0' : (500 - 4128 + props.scrollTop) / 500
            let scale = props.scrollTop >= 4128 ? '1' : props.scrollTop <= 3628 ? '0.5' : 0.5 + (500 - 4128 + props.scrollTop) * 0.001
            return `margin-top:-${marginTop}px;opacity:${opacity};transform:scale(${scale})`
        })

        return {
            theStyle,

            img: 'url(@/../static/img/bg/icon-sprite1.1.png)'
        }
    },
})
</script>
<style lang="scss" scoped>
.parachuting-wrap {
    z-index: 9999;
    width: 129px;
    height: 70px;
    position: absolute;
    top: 4320px;
    left: 50%;
    margin-left: -240px;
    animation: shakeXS 10s infinite;

    >div {
        width: 129px;
        height: 70px;
        background-repeat: no-repeat;
        background-size: 500px 1602px;
        background-position: -370px 0px;
    }
}

@keyframes shakeXS {

    0%,
    100% {
        transform: translateX(0)
    }

    10%,
    30%,
    50%,
    70%,
    90% {
        transform: translateX(-1px)
    }

    20%,
    40%,
    60%,
    80% {
        transform: translateX(1px)
    }
}

@media screen and (max-width: 390px) {
    .parachuting-wrap {
        margin-left: 50px;
    }
}
</style>