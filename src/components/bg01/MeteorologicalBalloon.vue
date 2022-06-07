<template>
    <div class="meteorological-balloon-wrap" :class="{ 'is-visibled': visible }">
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
        let isVisibled = false
        const visible = computed(() => {
            if (isVisibled) {
                return true
            } else {
                if (props.scrollTop >= 2600) {
                    isVisibled = true
                }
                return props.scrollTop >= 2600
            }
        })

        return {
            visible,

            img: 'url(@/../static/img/bg/icon-sprite1.1.png)',
        }
    },
})
</script>
<style lang="scss" scoped>
.meteorological-balloon-wrap {
    z-index: 9999;
    width: 72px;
    height: 104px;
    position: fixed;
    top: 100vh;
    left: 50%;
    margin-left: calc(100px - 36px);

    >div {
        width: 72px;
        height: 104px;

        background-repeat: no-repeat;
        background-size: 500px 1602px;
        background-position: -296px 0px;
    }

    &.is-visibled {
        animation: hor-animation 3s linear 0s 1;

        >div {
            animation: rotate-animation 3s linear 0s 1;
        }
    }
}

@keyframes hor-animation {

    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(calc(-100vh - 104px));
    }

}

@keyframes rotate-animation {

    0%,
    50%,
    100% {
        transform: rotate(0deg);
    }

    25%,
    75% {
        transform: rotate(30deg);
    }
}
</style>