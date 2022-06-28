<template>
    <div class="height-ruler-wrap">
        <!-- 大气层分界 -->
        <div v-for="(item, index) in atmosphereList" :key="`atmosphere-item-${index}`" class="atmosphere-item"
            :style="{ bottom: item.scrollTop + 'px' }">
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
            class="ruler-item wow animate__animated animate__fadeInLeft"
            :style="{ bottom: `${item.scrollTop - 100}px` }">
            <h3>{{ item.name }}</h3>
            <p>{{ item.height }}</p>
            <p class="annotation-wrap" v-if="item.annotation">{{ item.annotation }}</p>
        </div>

        <!-- 高度表 -->
        <div class="altitude-wrap">
            <p>
                滚动高度：{{ flyPx }} px
            </p>
            <p>
                飞行高度：{{ flyHeight }} km
            </p>
        </div>

        <!-- 自动发射按钮 -->
        <RocketLaunch @click="autoFlyStart" :class="{ 'animate__animated animate__fadeOutDown': flyPx >= 200 }" />
    </div>
</template>
<script lang="ts">
import { ref, defineComponent, onMounted, computed } from 'vue'
import WOW from 'wow.js'

import { storeToRefs } from 'pinia'
import {
    scrollStore
} from '../store/scroll'

import RocketLaunch from '@/components/other/RocketLaunch.vue'

export default defineComponent({
    components: {
        RocketLaunch
    },
    setup(props, context) {
        const { flyPx } = storeToRefs(scrollStore())

        onMounted(() => {
            new WOW({ animateClass: 'animate__animated' }).init()
        })

        // 飞行高度
        const atmosphereList = [
            {
                scrollTop: 1592,
                top: '平流层',
                bottom: '对流层',
                height: '13000米'
            },
            {
                scrollTop: 5292,
                top: '中间层',
                bottom: '平流层',
                height: '50000米'
            },
            {
                scrollTop: 9318,
                top: '热层',
                bottom: '中间层',
                height: '85000米'
            },
            {
                scrollTop: 10895,
                top: '进入地球近地轨道',
                height: '155000米'
            },
            {
                scrollTop: 15320,
                top: '散逸层',
                bottom: '热层',
                height: '800000米'
            },
            {
                scrollTop: 20323,
                bottom: '离开地球近地轨道',
                height: '2000000米'
            },
        ]
        const list = [
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
            }, {
                height: '100000米',
                scrollTop: 10545,
                name: '卡门线',
                annotation: '国际航空联合会定义的大气层和太空的界线。卡门线外为太空'
            }, {
                height: '120000米',
                scrollTop: 10745,
                name: '伊朗太空猴',
                annotation: '2013年伊朗将一只猴子发射到太空并成功返回'
            }, {
                height: '190000米',
                scrollTop: 11445,
                name: '流星雨',
                annotation: '彗星尘埃粒落入大气时摩擦生热发光'
            }, {
                height: '330000米',
                scrollTop: 12845,
                name: '第一位宇航员',
                annotation: '1961年尤里·加加林成为第一位进入太空的宇航员'
            }, {
                height: '420000米',
                scrollTop: 13745,
                name: '国际空间站',
                annotation: '国际空间站是一个在近地轨道上运行的的科研设施，也是人类历史上第九个载人的空间站'
            },
        ]
        const flyHeight = computed(() => {
            let rocketDom = document.getElementById('rocket')
            let rocketBottom = (rocketDom ? parseInt(rocketDom.style.bottom) : 0) + 130
            let heightList = [...atmosphereList, ...list].sort((a, b) => a.scrollTop - b.scrollTop)

            //飞行高度
            for (let i = 0; i < heightList.length; i++) {
                if (flyPx.value <= heightList[i].scrollTop - rocketBottom) {
                    return Math.round(flyPx.value * (parseInt(heightList[i].height) / (heightList[i].scrollTop - rocketBottom)) / 1000)
                }
            }

            return Math.round(flyPx.value / 1000)
        })


        // 自动飞行
        window.addEventListener(
            'mousewheel',
            (e) => {
                clearInterval(autoFlyTimer)
                timed = 0
            },
            false
        )
        let autoFlyTimer
        let speed: number = 20
        let timed: number = 0
        const reSpeed = ((speed) => {
            clearInterval(autoFlyTimer)
            autoFlyTimer = setInterval(() => {

                if (document.documentElement.scrollTop <= 0) {
                    clearInterval(autoFlyTimer)
                    timed = 0
                }
                document.documentElement.scrollTop = document.documentElement.scrollTop - 1
                timed += speed

                if (speed >= 8) {
                    reSpeed(speed - 0.1)
                }
            }, speed)
        })

        const autoFlyStart = (() => {
            autoFlyTimer = setInterval(() => {
                if (timed >= 5200) {
                    reSpeed(20)
                }
                if (document.documentElement.scrollTop <= 0) {
                    clearInterval(autoFlyTimer)
                    timed = 0
                }
                document.documentElement.scrollTop = document.documentElement.scrollTop - 1
                timed += speed
            }, speed)
        })

        return {
            flyPx,
            flyHeight,

            atmosphereList,
            list,

            autoFlyStart,
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
    top: 50px;
    left: 50%;
    padding: 4px 12px;
    color: #fff;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.6);
    transform: translateX(-50%);
    border-radius: 12px;
}

::v-deep(.rocker-launch) {
    z-index: 9999;
    height: 30px;
    position: fixed;
    bottom: 40px;
    left: 50%;
    margin-left: -80px;
}

@media screen and (max-width: 390px) {
    .height-ruler-wrap {
        .ruler-item {
            margin-left: -160px;
        }
    }
}
</style>