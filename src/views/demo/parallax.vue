<template>
  <div class="parallax-wrap">
    <p class="introduction-wrap">parallax.js 是一款简单，轻量级的视差效果生成器，可以对智能设备点击运动的方向作出反应，不需要任何识别方向，检测位置的设备，只需要游标（鼠标运动的方向等）的方向。</p>
    <DemoBox :height="292" title="快速创建视差效果" href="https://github.com/wagerfield/parallax">
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
      <template v-slot:code>
        <code class="html">{{fCode(html)}}</code>
        <code class="javascript">{{fCode(js)}}</code>
      </template>
    </DemoBox>
  </div>
</template>

<script>
import DemoBox from '@/components/demo/DemoBox.vue'
import Parallax from 'parallax-js'

export default {
  components: {
    DemoBox,
  },
  data() {
    return {
      html: `
      <template>
        <div id="theUseParallaxBox">
          <img src="@img/demo/page2layer0.png" data-depth="0.2" alt />
          <img src="@img/demo/page2layer1.png" data-depth="0.5" alt />
          <img src="@img/demo/page2layer2.png" data-depth="0.3" alt />
          <img src="@img/demo/page2layer3.png" data-depth="0.3" alt />
          <img src="@img/demo/page2layer4.png" data-depth="0.2" alt />
        </div>
      </template>`,
      js: `
        import Parallax from 'parallax-js'

        var parallax = document.getElementById('theUseParallaxBox')
        var parallaxInstance = new Parallax(parallax)
      `,
    }
  },
  mounted() {
    var parallax = document.getElementById('theUseParallaxBox')
    var parallaxInstance = new Parallax(parallax)
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.parallax-wrap {
}
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