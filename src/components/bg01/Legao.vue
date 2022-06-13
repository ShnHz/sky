<template>
    <div class="legao-wrap" :class="{ 'is-visibled': visible }">
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

        const visible = computed(() => {
            return flyPx.value >= 2500
        })

        return {
            visible,

            img: 'url(@/../static/img/bg/icon-sprite1.1.png)',
        }
    },
})
</script>
<style lang="scss" scoped>
.legao-wrap {
    z-index: 9999;
    width: 103px;
    height: 86px;
    position: absolute;
    bottom: 3030px;
    margin-left: -103px;

    >div {
        width: 77px;
        height: 77px;
        background-repeat: no-repeat;
        background-size: 500px 1602px;
        background-position: -217px 0px;
    }

    &.is-visibled {
        >div {
            animation: hor-animation 10s linear 0s infinite;
        }
    }
}

@keyframes hor-animation {

    0% {
        opacity: 0;
        transform: translateX(calc(100vw + 77px)) rotate(0deg);
    }

    10%,
    40% {
        opacity: 1;
    }

    50%,
    100% {
        opacity: 0;
        transform: translateX(-77px) rotate(720deg);
    }

}
</style>