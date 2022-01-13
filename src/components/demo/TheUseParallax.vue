<template>
  <DemoBox :height="0" title="快速创建视差效果" href="https://github.com/wagerfield/parallax">
    <template v-slot:demo>
      <div class="the-parallax-wrap">
        <div id="theUseParallaxBox">
          <img src="@img/demo/page2layer0.png" data-depth="0.2" alt />
          <img src="@img/demo/page2layer1.png" data-depth="0.5" alt />
          <img src="@img/demo/page2layer2.png" data-depth="0.3" alt />
          <img src="@img/demo/page2layer3.png" data-depth="0.3" alt />
          <img src="@img/demo/page2layer4.png" data-depth="0.2" alt />
        </div>
      </div>
    </template>
  </DemoBox>
</template>

<script>
import DemoBox from '@/components/demo/DemoBox'
import Parallax from 'parallax-js'

export default {
  components: {
    DemoBox,
  },
  data() {
    return {}
  },
  mounted() {
    var parallax = document.getElementById('theUseParallaxBox')
    var parallaxInstance = new Parallax(parallax)
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
::v-deep(.the-parallax-wrap) {
  width: 500px;
  height: 500px;
  overflow: hidden;
  background: #fff;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>