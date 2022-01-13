<template>
  <div class="vueuser-wrap">
    <p class="introduction-wrap">VueUse 是一个基于Composition API的实用函数集合，对Vue3支持比较好。</p>

    <DemoBox
      :height="232"
      title="监听打字聚焦输入框"
      href="https://github.com/vueuse/vueuse/blob/main/packages/core/onStartTyping/demo.vue"
      introduction="当用户开始在不可编辑的元素上输入时触发。"
    >
      <template v-slot:demo>
        <el-input style="width:300px" v-model="demo1.input" ref="input" placeholder="请输入内容"></el-input>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(demo1.html)}}</code>
        <code class="javascript">{{fCode(demo1.js)}}</code>
      </template>
    </DemoBox>

    <DemoBox :height="277" title="修改CssVar" href="https://github.com/vueuse/vueuse/blob/main/packages/core/useCssVar/demo.vue">
      <template v-slot:demo>
        <div style="color:var(--color)" @click="colorChange">单击变色</div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(demo2.html)}}</code>
        <code class="javascript">{{fCode(demo2.js)}}</code>
      </template>
    </DemoBox>
  </div>
</template>

<script>
import DemoBox from '@/components/demo/DemoBox.vue'

import { onStartTyping, useCssVar } from '@vueuse/core'

export default {
  components: {
    DemoBox,
  },
  data() {
    return {
      demo1: {
        html: `<template>
                <el-input style="width:300px" v-model="input" ref="input" placeholder="请输入内容"></el-input>
            </template>`,
        js: `import { onStartTyping } from '@vueuse/core'
            onStartTyping(() => {
                // @ts-ignore
                let input = this.$refs.input
                if (!input.value?.active) input.focus()
            })`,
        input: '',
      },
      demo2: {
        html: `<template>
                <div style="color:var(--color)" @click="colorChange">单击变色</div>
            </template>`,
        js: `
        import { useCssVar } from '@vueuse/core'
        
        this.color = useCssVar('--color', null)
        this.color.value = '#df8543'

        colorChange() {
            if (this.color.value === '#df8543') this.color.value = '#7fa998'
            else this.color.value = '#df8543'
        }
        `,
        color: null,
      },
    }
  },
  mounted() {
    // 1
    onStartTyping(() => {
      // @ts-ignore
      let input = this.$refs.input
      if (!input.value?.active) input.focus()
    })

    // 2
    this.color = useCssVar('--color', null)
    this.color.value = '#df8543'
  },
  methods: {
    colorChange() {
      if (this.color.value === '#df8543') this.color.value = '#7fa998'
      else this.color.value = '#df8543'
    },
  },
}
</script>
<style lang="scss" scoped>
.vueuser-wrap {
}
</style>