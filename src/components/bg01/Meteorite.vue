<template>
    <div class="meteorite-wrap" :class="{ 'is-visibled': visible }">
        <div class="asteroid">
            <div class="asteroid-head"></div>
            <div class="asteroid-tail"></div>
        </div>

        <div class="asteroid a2">
            <div class="asteroid-head"></div>
            <div class="asteroid-tail"></div>
        </div>
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
            return props.scrollTop >= 2400 && props.scrollTop <= 3300
        })

        return {
            visible,
        }
    },
})
</script>
<style lang="scss" scoped>
.meteorite-wrap {
    .asteroid {
        z-index: 9999;
        position: fixed;
        top: -200px;
        right: -200px;
        width: 200px;
        height: 200px;
        opacity: 0.8;

    }

    .asteroid-head {
        width: 10px;
        height: 10px;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
        background: #FFF;
        -webkit-box-shadow: 0px 0px 7px 2px #FFF;
        -moz-box-shadow: 0px 0px 7px 2px #FFF;
        box-shadow: 0px 0px 7px 2px #FFF;
        position: absolute;
        bottom: 0;
        right: 0;
    }

    .asteroid-tail {
        width: 0;
        height: 0;
        border-left: 3px solid transparent;
        border-bottom: 200px solid #FFF;
        border-right: 3px solid transparent;
        position: absolute;
        bottom: -22px;
        left: 265px;
        transform: rotate(45deg);
    }

    .a2 {
        top: -205px;
        right: 400px;
    }

    &.is-visibled {
        .asteroid {
            animation: asteroidAnimation 8s infinite;
            animation-timing-function: ease-in;
            animation-delay: 1s;
        }

        .a2 {
            animation: asteroidAnimationTwo 6s infinite;
            animation-timing-function: ease-in;
            animation-delay: 2s;
        }
    }
}

@keyframes asteroidAnimation {
    0% {
        top: -200px;
        right: -200px;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
        filter: alpha(opacity=80);
        opacity: 0.8;
    }

    10% {
        top: 400px;
        right: 400px;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        filter: alpha(opacity=0);
        opacity: 0;
    }

    100% {
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        filter: alpha(opacity=0);
        opacity: 0;
    }
}

@keyframes asteroidAnimationTwo {
    0% {
        top: -200px;
        right: 400px;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
        filter: alpha(opacity=80);
        opacity: 0.8;
    }

    10% {
        top: 400px;
        right: 980px;
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        filter: alpha(opacity=0);
        opacity: 0;
    }

    100% {
        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
        filter: alpha(opacity=0);
        opacity: 0;
    }
}

@media screen and (max-width: 390px) {
    .meteorite-wrap .a2 {
        right: 100px;
    }

    @keyframes asteroidAnimationTwo {
        0% {
            top: -200px;
            right: 100px;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";
            filter: alpha(opacity=80);
            opacity: 0.8;
        }

        10% {
            top: 400px;
            right: 680px;
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
            opacity: 0;
        }

        100% {
            -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
            filter: alpha(opacity=0);
            opacity: 0;
        }
    }
}
</style>