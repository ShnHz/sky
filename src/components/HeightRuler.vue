<template>
    <div class="height-ruler-wrap">
        <!-- 大气层分界 -->
        <div v-for="(item, index) in atmosphereList" :key="`atmosphere-item-${index}`" class="atmosphere-item"
            :style="{ top: item.scrollTop + 'px' }">
            <PluginsSvgIcon name="top" v-if="item.top" />
            <p v-if="item.top">
                {{ item.top }}
            </p>
            <div class="line"></div>
            <p v-if="item.bottom">
                {{ item.bottom }}
            </p>
            <PluginsSvgIcon name="bottom" v-if="item.bottom" />
        </div>

        <!-- 高度尺 -->
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
            atmosphereList: [
                {
                    scrollTop: 1592,
                    top: '对流层',
                    bottom: '平流层'
                },
                {
                    scrollTop: 5292,
                    top: '平流层',
                    bottom: '中间层'
                },
                {
                    scrollTop: 9318,
                    top: '中间层',
                    bottom: '热层'
                },
                {
                    scrollTop: 10895,
                    bottom: '进入地球近地轨道',
                },
                {
                    scrollTop: 15320,
                    top: '热层',
                    bottom: '散逸层'
                },

                {
                    scrollTop: 20323,
                    top: '离开地球近地轨道',
                },
            ],
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
    .atmosphere-item {
        z-index: 9998;
        width: 100vw;
        position: absolute;
        left: 50%;
        padding-top: 160px;
        color: #fff;
        transform: translateX(-50%);
        text-align: center;
        font-size: 20px;
        letter-spacing: 5px;
        text-shadow: 0px 2px 1px rgb(0 0 0 / 20%);

        .line {
            margin-top: 5px;
            margin-bottom: 2px;
            width: 100%;
            border-top: 2px dotted rgba(255, 255, 255, 0.3);
        }

        svg {
            width: 16px;
            height: 16px;

            &.icon-top {
                margin-bottom: 16px;
            }

            &.icon-bottom {
                margin-top: 18px;
            }
        }
    }

    .ruler-item {
        z-index: 9998;
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