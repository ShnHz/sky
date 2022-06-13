<template>
    <div class="plane-wrap" :class="{ 'is-visibled': visible }">
        <div :style="{ 'background-image': imgPlane }"></div>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { scrollStore } from '../../store/scroll'
import { storeToRefs } from 'pinia'

export default defineComponent({
    setup(props, context) {
        const { flyPx } = storeToRefs(scrollStore())

        const visible = computed(() => {
            return flyPx.value >= 960
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
    width: 103px;
    height: 86px;
    position: absolute;
    bottom: 1400px;
    margin-left: -103px;

    >div {
        width: 103px;
        height: 86px;
        background-repeat: no-repeat;
        background-size: 500px 1602px;
        background-position: 0px 0px;
    }

    &.is-visibled {
        animation: vertical-animation 6s cubic-bezier(0, .5, .49, .99) 0s infinite;

        >div {
            animation: hor-animation 6s linear 0s infinite;

        }
    }
}

@keyframes hor-animation {

    0% {
        opacity: 0;
        transform: translateX(-103px) rotate(-7deg);
    }

    15%,
    35% {
        opacity: 1;
    }

    50%,
    100% {
        opacity: 0;
        transform: translateX(calc(100vw + 103px)) rotate(10deg);
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