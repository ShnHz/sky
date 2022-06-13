<template>
    <div class="clouds-wrap">
        <div id="clouds-back" :class="{ 'is-visibled': visible }" class="clouds" :style="{ 'background': imgC1 }"></div>
        <div id="clouds-mid" :class="{ 'is-visibled': visible }" class="clouds" :style="{ 'background': imgC2 }"></div>
        <div id="clouds-fore" :class="{ 'is-visibled': visible }" class="clouds" :style="{ 'background': imgC3 }"></div>
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
            return flyPx.value >= 560
        })

        return {
            visible,

            imgC1: 'url(@/../static/img/cloud/clouds-back.png) no-repeat bottom center',
            imgC2: 'url(@/../static/img/cloud/clouds-mid.png) no-repeat bottom center',
            imgC3: 'url(@/../static/img/cloud/clouds-fore.png) no-repeat bottom center',

        }
    },
})
</script>
<style lang="scss" scoped>
.clouds-wrap {

    .clouds {
        z-index: 9998;
        width: 976px;
        left: 50%;
        position: absolute;
        margin-left: -488px;
        opacity: 0;

        &.is-visibled {
            opacity: 1;

            &#clouds-back {
                margin-bottom: -140px;
                transform: matrix(1.5, 0, 0, 1.5, 0, 0);
            }

            &#clouds-mid {
                margin-bottom: -150px;
            }

            &#clouds-fore {
                margin-bottom: -160px;
            }
        }
    }

    #clouds-back {
        height: 180px;
        bottom: 1160px;
        margin-bottom: -380px;
        transform: matrix(1, 0, 0, 1, 0, 0);
        transition: all 1s ease-in-out;
    }

    #clouds-mid {
        height: 200px;
        bottom: 1160px;
        margin-bottom: -390px;
        transition: all 1.1s ease-in-out;
    }

    #clouds-fore {
        height: 180px;
        bottom: 1160px;
        margin-bottom: -440px;
        transition: all 1.2s ease-in-out;
    }
}
</style>