<template>
    <div class="plane-wrap" :class="{ 'is-visibled': visible }">
        <div :style="{ 'background-image': imgPlane }"></div>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
    props: {
        scrollTop: Number,
    },
    setup(props, context) {
        const visible = computed(() => {
            return props.scrollTop >= 1860
        })

        return {
            visible,

            imgPlane: 'url(@/../static/img/bg/icon-sprite1.1.png)',
        }
    },
})
</script>
<style lang="scss" scoped>
.plane-wrap {
    z-index: 9999;
    width: 111px;
    height: 86px;
    position: absolute;
    top: 2630px;
    margin-left: -111px;

    >div {
        width: 111px;
        height: 100px;
        background-repeat: no-repeat;
        background-size: 500px 1602px;
        background-position: -104px 0px;
    }

    &.is-visibled {
        animation: vertical-animation 4s cubic-bezier(0.52, 0.06, 0.94, 0.33) 0s infinite;

        >div {
            animation: hor-animation 4s linear 0s infinite;

        }
    }
}

@keyframes hor-animation {

    0% {
        opacity: 0;
        transform: translateX(-111px) rotate(10deg);
    }

    15%,
    35% {
        opacity: 1;
    }

    50%,
    100% {
        opacity: 0;
        transform: translateX(calc(100vw + 111px)) rotate(-18deg);
    }

}

@keyframes vertical-animation {

    0% {
        transform: translateY(0px);
    }

    50%,
    100% {
        transform: translateY(-30vh);
    }

}
</style>