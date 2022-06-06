<template>
    <div class="track"></div>
    <div class="height-ruler-wrap">
        <div v-for="(item, index) in list" :key="`ruler-item-${index}`"
            class="ruler-item wow animate__animated animate__fadeInLeft" :style="{ top: item.scrollTop - 100 + 'px' }">
            <h3>{{ item.name }}</h3>
            <p>{{ item.height }}</p>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import WOW from 'wow.js'

export default defineComponent({
    props: {
        scrollTop: Number,
    },
    setup(props, context) {
        onMounted(() => {
            new WOW({ animateClass: 'animate__animated' }).init()
        })
        return {
            list: [
                {
                    height: '6100米',
                    scrollTop: 1160,
                    name: '高空云层'
                },
                {
                    height: '8900米',
                    scrollTop: 1360,
                    name: '珠穆朗玛峰'
                },
                {
                    height: '11000米',
                    scrollTop: 1560,
                    name: '飞机巡航高度'
                }
            ]
        }
    },
})
</script>
<style lang="scss" scoped>
.height-ruler-wrap {
    .ruler-item {
        z-index: 9999;
        line-height: 1.6;
        position: absolute;
        left: 50%;
        margin-left: -488px;
        color: rgb(243, 146, 0);

        &::before {
            content: '';
            display: block;
            width: 200px;
            position: absolute;
            left: -220px;
            top: 20px;
            border-top: 2px solid rgb(243, 146, 0);
            position: relative;
        }

        h3 {
            font-size: 22px;
        }

        p {
            font-weight: 600;
            font-size: 16px;
        }
    }
}
</style>