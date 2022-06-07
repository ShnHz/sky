<template>
    <div class="aurora-wrap">
        <div id="aurora-back" :class="{ 'is-visibled': visible }" class="aurora" :style="{ 'background': imgC1 }"></div>
        <div id="aurora-mid" :class="{ 'is-visibled': visible }" class="aurora" :style="{ 'background': imgC2 }"></div>
        <div id="aurora-fore" :class="{ 'is-visibled': visible }" class="aurora" :style="{ 'background': imgC3 }"></div>
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
            return props.scrollTop >= 8000
        })

        return {
            visible,

            imgC1: 'url(@/../static/img/aurora/borealis-back.png) no-repeat bottom center',
            imgC2: 'url(@/../static/img/aurora/borealis-mid.png) no-repeat bottom center',
            imgC3: 'url(@/../static/img/aurora/borealis-fore.png) no-repeat bottom center',

        }
    },
})
</script>
<style lang="scss" scoped>
.aurora-wrap {

    .aurora {
        z-index: 9998;
        width: 976px;
        left: 50%;
        position: absolute;
        margin-left: -488px;
        opacity: 0;

        &.is-visibled {
            opacity: 1;

            &#aurora-back {
                transform: scale(1.5);
                margin-top: -150px;
            }

            &#aurora-mid {
                transform: scale(1.5);
                margin-top: -180px;
            }

            &#aurora-fore {
                transform: scale(1.5);
                margin-top: -200px;
            }
        }
    }

    #aurora-back {
        height: 450px;
        top: 8545px;
        margin-top: 100px;
        transition: all 1s ease-in-out;
    }

    #aurora-mid {
        height: 450px;
        top: 8545px;
        margin-top: 120px;
        transition: all 1.1s ease-in-out;
    }

    #aurora-fore {
        height: 450px;
        top: 8545px;
        margin-top: 150px;
        transition: all 1.2s ease-in-out;
    }
}
</style>