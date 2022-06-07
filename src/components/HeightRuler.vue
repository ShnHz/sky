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
            <p class="annotation-wrap" v-if="item.annotation">{{ item.annotation }}</p>
        </div>

        <div class="altitude-wrap">
            <p>
                滚动高度：{{ scrollTop }} px
            </p>
            <p>
                飞行高度：{{ flyHeight }} km
            </p>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue'
import WOW from 'wow.js'

export default defineComponent({
    props: {
        scrollTop: Number,
    },
    setup(props, context) {
        onMounted(() => {
            new WOW({ animateClass: 'animate__animated' }).init()
        })

        const flyHeight = computed(() => {
            //飞行高度
            if (props.scrollTop <= 1160) {
                return Math.round(props.scrollTop * 5.25 / 1000)
            } else if (props.scrollTop <= 1360) {
                return Math.round(props.scrollTop * 6.54 / 1000)
            } else if (props.scrollTop <= 1560) {
                return Math.round(props.scrollTop * 7.05 / 1000)
            } else if (props.scrollTop <= 1808) {
                return Math.round(props.scrollTop * 6.64 / 1000)
            } else if (props.scrollTop <= 2730) {
                return Math.round(props.scrollTop * 8.05 / 1000)
            } else if (props.scrollTop <= 2930) {
                return Math.round(props.scrollTop * 7.85 / 1000)
            } else if (props.scrollTop <= 3130) {
                return Math.round(props.scrollTop * 7.67 / 1000)
            } else if (props.scrollTop <= 3330) {
                return Math.round(props.scrollTop * 8.10 / 1000)
            } else if (props.scrollTop <= 4442) {
                return Math.round(props.scrollTop * 8.10 / 1000)
            } else if (props.scrollTop <= 4642) {
                return Math.round(props.scrollTop * 8.83 / 1000)
            } else if (props.scrollTop <= 5508) {
                return Math.round(props.scrollTop * 10 / 1000)
            } else if (props.scrollTop <= 5848) {
                return Math.round(props.scrollTop * 9.06 / 1000)
            } else if (props.scrollTop <= 7048) {
                return Math.round(props.scrollTop * 9.22 / 1000)
            } else if (props.scrollTop <= 8545) {
                return Math.round(props.scrollTop * 9.36 / 1000)
            } else if (props.scrollTop <= 9508) {
                return Math.round(props.scrollTop * 8.94 / 1000)
            }

            return Math.round(props.scrollTop / 1000)
        })

        return {
            flyHeight,

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
                },
                {
                    height: '22000米',
                    scrollTop: 2730,
                    name: 'X-1试验机',
                    annotation: '世界第一架超音速飞机达到过的高度'
                },
                {
                    height: '23000米',
                    scrollTop: 2930,
                    name: '车里雅宾斯克陨石',
                    annotation: '2013年一个直径18米的陨石在俄罗斯车里雅宾斯克州上空爆炸'
                },
                {
                    height: '24000米',
                    scrollTop: 3130,
                    name: '乐高',
                    annotation: '2012年两位加拿大少年将一个乐高小人发射升空'
                },
                {
                    height: '27000米',
                    scrollTop: 3330,
                    name: '气象探测气球高度',
                },
                {
                    height: '39000米',
                    scrollTop: 4442,
                    name: '高空跳伞记录',
                    annotation: '2012年菲利克斯·鲍加特纳创造了世界高空跳伞记录'
                },
                {
                    height: '41000米',
                    scrollTop: 4642,
                    name: '自然生物圈边界',
                    annotation: '有低等细菌和微生物在此高度上存活'
                },
                {
                    height: '53000米',
                    scrollTop: 5848,
                    name: '无人气球最高记录',
                },
                {
                    height: '65000米',
                    scrollTop: 7048,
                    name: '陨石摩擦发光',
                    annotation: '只有少数较大陨石可以到达地球表面'
                }, {
                    height: '80000米',
                    scrollTop: 8545,
                    name: '极光的最低高度',
                },
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

        .annotation-wrap {
            color: #fff;
            font-size: 14px;
            font-weight: 400;
        }
    }
}

.altitude-wrap {
    position: fixed;
    bottom: 50px;
    left: 50%;
    padding: 4px 12px;
    color: #fff;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.6);
    transform: translateX(-50%);
    border-radius: 12px;
}

@media screen and (max-width: 390px) {
    .height-ruler-wrap {
        .ruler-item {
            margin-left: -160px;
        }
    }
}
</style>