<template>
    <div class="loading-wrap"
        :class="{ 'animate__animated animate__fadeOut': percent >= 100, 'is-not-visibled': !isVisibled }">
        <section>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px"
                viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                <rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2">
                    <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s"
                        repeatCount="indefinite" />
                    <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s"
                        repeatCount="indefinite" />
                    <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s"
                        repeatCount="indefinite" />
                </rect>
                <rect x="8" y="10" width="4" height="10" fill="#333" opacity="0.2">
                    <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s"
                        repeatCount="indefinite" />
                    <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s"
                        repeatCount="indefinite" />
                    <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s"
                        repeatCount="indefinite" />
                </rect>
                <rect x="16" y="10" width="4" height="10" fill="#333" opacity="0.2">
                    <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s"
                        repeatCount="indefinite" />
                    <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s"
                        repeatCount="indefinite" />
                    <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s"
                        repeatCount="indefinite" />
                </rect>
            </svg>

            <p>正在加载，请稍等！<span class="percent">{{ percent }}%</span></p>
        </section>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent, onBeforeMount } from 'vue'

export default defineComponent({
    props: {
    },
    setup(props, context) {
        let percent = ref(0)
        let isVisibled = ref(true)

        onBeforeMount(() => {
            setTimeout(() => {
                let count = 0;
                let imgs = [
                    '@/../static/img/bg/b1-tile.jpg',
                    '@/../static/img/bg/b1.jpg',
                    '@/../static/img/bg/b2-tile.jpg',
                    '@/../static/img/bg/b2.jpg',

                    '@/../static/img/bg/earth.png',
                    '@/../static/img/rocket/rocket.png',
                    '@/../static/img/rocket/flame-sprite.png',
                    '@/../static/img/bg/icon-sprite1.1.png',
                    '@/../static/img/cloud/clouds-back.png',
                    '@/../static/img/cloud/clouds-mid.png',
                    '@/../static/img/cloud/clouds-fore.png',
                    '@/../static/img/aurora/borealis-back.png',
                    '@/../static/img/aurora/borealis-mid.png',
                    '@/../static/img/aurora/borealis-fore.png',
                ]
                for (let img of imgs) {
                    let image = new Image();
                    image.onload = () => {
                        count++;
                        percent.value = Math.floor(count / imgs.length * 100);
                        if (percent.value == 100) {
                            setTimeout(() => {
                                isVisibled.value = false
                            }, 1000);
                        }
                    };
                    image.src = img;
                }
            }, 1000)

        })

        return {
            percent,
            isVisibled
        }
    },
})
</script>

<style scoped lang="scss">
.loading-wrap {
    z-index: 99999;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;

    &.is-not-visibled {
        display: none;
    }

    section {
        text-align: center;

        svg {
            width: 60px;
            height: 60px;
        }

        .percent {
            font-weight: 600;
            color: #f39200
        }
    }
}
</style>