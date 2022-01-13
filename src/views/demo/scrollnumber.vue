<template>
  <div class="demo-scrollnum-wrap">
    <DemoBox :height="352" title="普通数字">
      <template v-slot:demo>
        <ul class="scrollnum-wrap">
          <ScrollNum v-for="(num, idx) of demo1NumArr" :key="idx" as="li" :i="num" :delay="idx + 1" />
        </ul>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(demo1.html)}}</code>
        <code class="javascript">{{fCode(demo1.js)}}</code>
      </template>
    </DemoBox>

    <DemoBox :height="352" title="同时停止">
      <template v-slot:demo>
        <ul class="scrollnum-wrap">
          <ScrollNum v-for="(num, idx) of demo1NumArr" :key="idx" as="li" :i="num" :delay="2" />
        </ul>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(demo2.html)}}</code>
        <code class="javascript">{{fCode(demo2.js)}}</code>
      </template>
    </DemoBox>

    <DemoBox :height="547" title="触发开始">
      <template v-slot:demo>
        <ul class="scrollnum-wrap">
          <ScrollNum v-for="(num, idx) of demo1NumArr" :key="idx" as="li" :i="num" :delay="idx + 1" :ref="`scrollNum${idx}`" :auto="false" />
        </ul>
        <el-button style="margin-top:20px" type="primary" size="mini" @click="startScroll">开始</el-button>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(demo3.html)}}</code>
        <code class="javascript">{{fCode(demo3.js)}}</code>
      </template>
    </DemoBox>

    <DemoBox :height="547" title="带有字符串">
      <template v-slot:demo>
        <ul class="scrollnum-wrap scrollnum-string-wrap">
          <div v-for="(item, idx) of demo4NumArr" :key="idx">
            <ScrollNum :width="15" as="li" :i="item.num" :delay="item.delay" v-if="mixin_isNumber(item.num)" />
            <li class="scrollnum-string" v-else>{{item}}</li>
          </div>
        </ul>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(demo3.html)}}</code>
        <code class="javascript">{{fCode(demo3.js)}}</code>
      </template>
    </DemoBox>
  </div>
</template>

<script>
import ScrollNum from '@/components/common/ScrollNum.vue'
import DemoBox from '@/components/demo/DemoBox.vue'

export default {
  components: { DemoBox, ScrollNum },
  data() {
    return {
      demo1: {
        html: `
        <template>
          <ul class="scrollnum-wrap">
            <ScrollNum v-for="(num, idx) of demo1NumArr" :key="idx" as="li" :i="num" :delay="idx + 1" />
          </ul>
        </template>
        `,
        js: `
        computed: {
          demo1NumArr() {
            const str = String(886)
            let arr = []

            for (let i = 0; i < str.length; i++) {
              arr.push(parseInt(str[i]))
            }

            return arr
          },
        },
        `,
      },
      demo2: {
        html: `
        <template>
          <ul class="scrollnum-wrap">
            <ScrollNum v-for="(num, idx) of demo2NumArr" :key="idx" as="li" :i="num" :delay="2" />
          </ul>
        </template>
        `,
        js: `
        computed: {
          demo2NumArr() {
            const str = String(886)
            let arr = []

            for (let i = 0; i < str.length; i++) {
              arr.push(parseInt(str[i]))
            }

            return arr
          },
        },
        `,
      },
      demo3: {
        html: `
        <template>
          <ul class="scrollnum-wrap">
            <ScrollNum v-for="(num, idx) of demo3NumArr" 
              :key="idx" as="li" :i="num" 
              :delay="idx + 1" 
              :ref="xxx" 
              :auto="false" 
            />
          </ul>
        </template>
        `,
        js: `
        computed: {
          demo3NumArr() {
            const str = String(886)
            let arr = []

            for (let i = 0; i < str.length; i++) {
              arr.push(parseInt(str[i]))
            }

            return arr
          },
        },

        methods:{
          startScroll() {
            this.demo1NumArr.forEach((item, index) => {
              this.$refs[xxx][0].start()
            })
          },
        }
        `,
      },
      demo4: {
        html: `
        <template>
          <ul class="scrollnum-wrap scrollnum-string-wrap">
            <div v-for="(item, idx) of demo4NumArr" :key="idx">
              <ScrollNum :width="15" as="li" 
                :i="item.num" :delay="item.delay" 
                v-if="mixin_isNumber(item.num)" 
              />
              <li class="scrollnum-string" v-else>{{item}}</li>
            </div>
          </ul>
        </template>
        `,
        js: `
        computed: {
          demo4NumArr() {
            const str = '268,005'
            let arr = []
            let delay = 1
            let reg = new RegExp('^[0-9]*$')

            for (let i = 0; i < str.length; i++) {
              if (reg.test(str[i])) {
                arr.push({
                  num: parseInt(str[i]),
                  delay: delay,
                })
                delay += 0.2
              } else {
                arr.push(str[i])
              }
            }

            return arr
          },
        }
        `,
      },
    }
  },
  computed: {
    demo1NumArr() {
      const str = String(886)
      let arr = []

      for (let i = 0; i < str.length; i++) {
        arr.push(parseInt(str[i]))
      }

      return arr
    },
    demo4NumArr() {
      const str = '268,005'
      let arr = []
      let delay = 1
      let reg = new RegExp('^[0-9]*$')

      for (let i = 0; i < str.length; i++) {
        if (reg.test(str[i])) {
          arr.push({
            num: parseInt(str[i]),
            delay: delay,
          })
          delay += 0.2
        } else {
          arr.push(str[i])
        }
      }

      return arr
    },
  },
  mounted() {},
  methods: {
    startScroll() {
      this.demo1NumArr.forEach((item, index) => {
        this.$refs[`scrollNum${index}`][0].start()
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.demo-scrollnum-wrap {
  .scrollnum-wrap {
    display: flex;
    li.scrollnum-string {
      display: flex;
      align-items: flex-end;
      justify-content: center;
      width: 5px;
      height: 100%;
    }
    &.scrollnum-string-wrap {
      ::v-deep(.scroll-num) {
        --width: 12px !important;
        font-size: 18px !important;
      }
    }
  }
}
</style>