<template>
    <div class="clouds-wrap">
        <div id="clouds-back" :class="{ 'is-visibled': visible }" class="clouds"></div>
        <div id="clouds-mid" :class="{ 'is-visibled': visible }" class="clouds"></div>
        <div id="clouds-fore" :class="{ 'is-visibled': visible }" class="clouds"></div>
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
            return props.scrollTop >= 560
        })

        return {
            visible
        }
    },
})
</script>
<style lang="scss" scoped>
.clouds-wrap {

    .clouds {
        z-index: 9999;
        width: 976px;
        left: 50%;
        position: absolute;
        margin-left: -488px;
        opacity: 0;

        &.is-visibled {
            opacity: 1;

            &#clouds-back {
                margin-top: -140px;
                transform: matrix(1.5, 0, 0, 1.5, 0, 0);
            }

            &#clouds-mid {
                margin-top: -150px;
            }

            &#clouds-fore {
                margin-top: -160px;
            }
        }
    }

    #clouds-back {
        background: url(../../../static/img/cloud/clouds-back.png) no-repeat bottom center;
        height: 180px;
        top: 1160px;
        margin-top: 100px;
        transform: matrix(1, 0, 0, 1, 0, 0);
        transition: all 1s ease-in-out;
    }

    #clouds-mid {
        background: url(../../../static/img/cloud/clouds-mid.png) no-repeat bottom center;
        height: 200px;
        top: 1160px;
        margin-top: 120px;
        transition: all 1.1s ease-in-out;
    }

    #clouds-fore {
        background: url(../../../static/img/cloud/clouds-fore.png) no-repeat bottom center;
        height: 180px;
        top: 1160px;
        margin-top: 140px;
        transition: all 1.2s ease-in-out;
    }
}
</style>